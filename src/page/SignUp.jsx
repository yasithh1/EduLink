import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import './SignUp.css';
import { Link } from 'react-router-dom';
import email from '../assets/email.png';
import password1 from '../assets/password.png';
import eye from '../assets/eye.png';
import logo from '../assets/logo.png';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:8080/api/users/signup', {
        firstName,
        lastName,
        email: emailAddress,
        password
      });
      
      // Handle success (e.g., redirect to login page or show success message)
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      
    } catch (error) {
      // Handle error
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div id="signup-page">
      <div className="container-Signup">
        <div className="logoContainer">
          <img src={logo} alt="logo"/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="input">
              <input 
                type="text" 
                placeholder="First Name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input">
              <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <img className="left" src={email} alt="Email"/>
            <input 
              type="email" 
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="input">
            <img className="left" src={password1} alt="Password"/>
            <input 
              className="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img 
              className="eye" 
              src={eye} 
              alt="Show/Hide Password" 
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="input">
            <img className="left" src={password1} alt="Confirm Password"/>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img 
              className="eye" 
              src={eye} 
              alt="Show/Hide Password" 
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
          <button type="submit" className="loginButton">Sign Up</button>
        </form>
        <div className="signup">
          <span>Already have an account? <Link to="/login">Login In</Link></span>
        </div>
        <div className="terms">
          <span>
            By Signing Up/Logging in, You agree to our{' '}
            <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
