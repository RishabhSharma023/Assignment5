import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <div className="logo">Amazin' Prime Video</div>
                <img className="logoImg" src="amazingprimeVid.png" alt="Logo" />
            </div>
            <div className="login-container">
                <div className="username">
                    <form>
                        <label>Username: </label>
                        <input type="text" />
                    </form>
                </div>
                <div className="password">
                    <form>
                        <label>Password: </label>
                        <input type="password" />
                    </form>
                </div>
                <div className="login">
                    <button className="button">Login / Register</button>
                </div>
            </div>
        </header>
    );
}

export default Header;