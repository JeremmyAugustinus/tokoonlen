import Navbar from '../components/Navbar';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

export default function Home() {
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        if (!cookies.token) {
            window.location.href = "http://localhost:3000/login";
        }
    }, []);

    return (
        <>
            {cookies.token ? (
                <>
                    <Navbar/>
                    <div className="container container-full">
                        <div className="display-4">Hi, Jeremmy!</div>
                    </div>
                </>
            ) : null}
        </>
    );
}