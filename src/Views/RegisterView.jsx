import "./RegisterView.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";

function RegisterView() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); // Prevents page reload
        if (password === rePassword) {
            alert("Registration successful!");
            navigate("/movies"); // Redirect to MoviesView
        } else {
            alert("Passwords do not match.");
        }
    }

    return (
        <div>
            <Header />
            <div className="formContainerReg">
                <h1 className="formTitleReg">Register</h1>
                <form className="formReg" onSubmit={handleSubmit}>
                    <label className="boxLabelsReg">First Name:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <label className="boxLabelsReg">Last Name:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <label className="boxLabelsReg">Email:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label className="boxLabelsReg">Password:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <label className="boxLabelsReg">Re-enter Password:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="password"
                        value={rePassword}
                        onChange={(event) => setRePassword(event.target.value)}
                    />
                    <input className="registerButtonReg" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}

export default RegisterView;