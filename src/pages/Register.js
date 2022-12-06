import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cookies, setCookie] = useCookies();

    const submitRegister = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/user/register', {
                name: name,
                email: email,
                password: password
            }).then(function (response) {
                setCookie('token', response.data.token, { path: '/' });
                window.location.href = "http://localhost:3000/";
            }).catch(function (error) {
                console.log(error);
                if (error.response.status === 400) {
                    error.response.data.errors.forEach(err => {
                        toast.error(err.msg, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    });
                } else {
                    toast.error(error.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            });
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (cookies.token) {
            window.location.href = "http://localhost:3000/";
        }
    }, []);

    return (
        <>
            {!cookies.token ? (
            <div className="container container-full">
                <form onSubmit={submitRegister} className="w-50">
                    <div className="display-4 pb-3">Register</div>
                    <div className="form-outline mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <input type="submit" value="Sign in" className="btn btn-primary btn-block mb-4" />
                    <div className="text-center">
                        <p>Sudah punya akun? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>):null}
        </>
    )
}