import "./LoginView.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";

function LoginView() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const adminEmail = "rishabh@gmail.com";
    const adminPassword = "password";

    function handleSubmit(event) {
        event.preventDefault(); // Prevents page reload
        if (email === adminEmail && password === adminPassword) {
            alert("Login successful!");
            navigate("/movies"); // Redirect to MoviesView
        } else {
            alert("Incorrect email or password.");
        }
    }

    return (
        <div>
            <Header />
            <div className="formContainerLog">
                <h1 className="formTitleLog">Login</h1>
                <form className="formLog" onSubmit={handleSubmit}>
                    <label className="boxLabelsLog">Email:</label>
                    <input
                        required
                        className="infoBoxesLog"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label className="boxLabelsLog">Password:</label>
                    <input
                        required
                        className="infoBoxesLog"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input className="loginButtonLog" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default LoginView;