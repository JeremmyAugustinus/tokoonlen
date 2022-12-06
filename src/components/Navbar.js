
import { useCookies } from 'react-cookie';

export default function Navbar() {
    const [cookies, setCookie, removeCookie] = useCookies();

    function logout() {
        removeCookie('token');
        window.location.href = "http://localhost:3000/login";
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="/">TOKONLEN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/product">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/account">Account</a>
                    </li>
                </ul>
            </div>
            <button type="button" className="btn" onClick={logout}>Log out</button>
        </nav>
    );
}