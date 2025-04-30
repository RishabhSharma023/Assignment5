import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    function handleSignOut() {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    }

    return (
        <header className="header">
            <div className="logo-container">
                <div className="logo">Amazin' Prime Video</div>
                <img className="logoImg" src="/amazingprimeVid.png" alt="Logo" />
            </div>
            <div className="login-container">
                {isLoggedIn ? (
                    <button className="button" onClick={handleSignOut}>Sign Out</button>
                ) : (
                    <>
                        <button className="button" onClick={() => navigate('/login')}>Login</button>
                        <button className="button" onClick={() => navigate('/register')}>Register</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
