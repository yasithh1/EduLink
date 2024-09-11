import React from "react";
import  './Navbar.css';
import home from '../assets/home.png';
import profile from '../assets/profile.png';
import game from '../assets/game.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import setting from '../assets/setting.png';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <div className="navbar">

            <ul className="left-conor">
                <li>
                    <img src={logo} alt="Home Icon" className="icon"/>
                </li>
                <li>
                    <img src={home} alt="Home Icon" className="icon"/>
                </li>
                <li>
                    <img src={game} alt="Home Icon" className="icon"/>
                </li>

            </ul>
            <ul className="right-conor">
                <li>
                    <img src={profile} alt="Home Icon" className="icon"/>
                </li>
                <li>
                    <img src={sun} alt="Home Icon" className="icon"/>
                    <img src={moon} alt="Home Icon" className="icon"/>
                </li>
                <li>
                    <img src={setting} alt="Home Icon" className="icon"/>
                </li>
            </ul>
        </div>

    );

}
export default Navbar;