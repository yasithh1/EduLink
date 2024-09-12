import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import eye from '../assets/eye.png';
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import phone from '../assets/phone.png';

import PopupMessage from '../component/PopupMessage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Save user details to localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        setPopupMessage('Login successful');
        setPopupVisible(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid email or password');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    navigate('/home');
  };

  return (
    <div className="container-login">
      <div className="logoContainer">
        <img src={logo} alt="Logo" />
      </div>
      <div className="input">
        <img src={emailIcon} alt="Email" />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input">
        <img src={passwordIcon} alt="Password" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img src={eye} alt="Show/Hide Password" />
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="forgotPassword">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <button className="loginButton" onClick={handleLogin}>
        Log In
      </button>
      <div className="signup">
        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
      </div>
      <div className="or">OR</div>
      <div className="socialLogin">
        <img src={google} alt="Google Login" />
        <img src={phone} alt="Phone Login" />
      </div>
      <div className="terms">
        <span>
          By Signing Up/Logging in, You agree to our{' '}
          <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
        </span>
      </div>

      {popupVisible && (
        <PopupMessage
          message={popupMessage}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
}

export default Login;
