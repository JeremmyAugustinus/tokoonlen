import Navbar from '../components/Navbar';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

export default function Product() {
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
                    <div className="mt-5">
                        product
                    </div>
                </>
            ) : null}
        </>
    );
}