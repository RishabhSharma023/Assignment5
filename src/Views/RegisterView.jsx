import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './RegisterView.css';

function RegisterView(){
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (password != confirmPassword) {
        alert("Password Don't Match")
      } else {
        navigate('/signin');
      }
    };
  
    return (
      <div>
        <nav className="logo-nav">
          <Link to="/"><img src="../src/imgs/logo.png" /></Link>
        </nav>
        <div className="sign-up-page">
          <div className="sign-up">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSubmit}>
              <div className="info">
                <input type="text" name="first" required />
                <label>First Name</label>
              </div>
              <div className="info">
                <input type="text" name="last" required />
                <label>Last Name</label>
              </div>
              <div className="info">
                <input type="email" name="email" required />
                <label>Email</label>
              </div>
              <div className="info">
                <input type="password" name="password" onChange={(e) => setPass(e.target.value)} required />
                <label>Password</label>
              </div>
              <div className="info">
                <input type="password" name="confirmPassword" onChange={(e) => setConfirmPass(e.target.value)} required />
                <label>Confirm Password</label>
              </div>
              <button className="sign-up-btn" type="submit">Sign Up</button>
              <div className="help">
                <Link to="#">Need help?</Link>
              </div>
            </form>
            <p>Already Have An Account? <Link to="/signin">Sign In</Link></p>
          </div>
        </div>
      </div>
    );
}

export default RegisterView;