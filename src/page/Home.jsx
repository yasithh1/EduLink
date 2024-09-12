import React from 'react';
import './Home.css';
import al from '../assets/al.jpeg';
import ol from '../assets/ol.jpeg';
import motivation from '../assets/motivation.jpeg';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';


const Home = () => {
  return (
    
    <div className="app-container">
      <Navbar/>
      <div className="home-page">
        <section className="services">
          <div className="service">
            <img src={ol} alt="Ordinary Level" />
            <h3>Ordinary Level</h3>
          </div>
          <div className="service">
            <img src={al} alt="Advanced Level" />
            <h3>Advanced Level</h3>
          </div>
          <div className="service">
            <img src={motivation} alt="Weekly Motivation" />
            <h3>Weekly Motivation</h3>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
