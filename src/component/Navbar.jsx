import React, { useState } from "react";
import './Navbar.css';
import home from '../assets/home.png';
import profile from '../assets/profile.png';
import game from '../assets/game.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import setting from '../assets/setting.png';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom'; 

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    };

    return (
        <div className="navbar">
            <ul className="left-corner">
                <li>
                    <img src={logo} alt="Logo Icon" className="icon"/>
                </li>
                <li>
                    <img src={home} alt="Home Icon" className="icon"/>
                </li>
                <li>
                    <img src={game} alt="Game Icon" className="icon"/>
                </li>
            </ul>
            <ul className="right-corner">
                <li>
                    <img src={profile} alt="Profile Icon" className="icon" onClick={() => navigate('/profile')}/>
                </li>
                <li className="theme-toggle" onClick={toggleTheme}>
                    <img src={darkMode ? sun : moon} alt="Theme Toggle Icon" className="icon"/>
                </li>
                <li>
                    <img src={setting} alt="Settings Icon" className="icon"/>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
