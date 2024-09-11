<<<<<<< HEAD
import React from 'react';
import './SelfChallanges.css'; // Ensure this path is correct

function SelfChallanges() {
  return (
    <div className="self-challenges-page">
      <h2 className="title">Self Challenge</h2>
      <div className="dropdown-container">
        <label>Select Category</label>
        <select className="dropdown">
          <option value="science">Science (A/L)</option>
          <option value="maths">Maths</option>
          <option value="biology">Biology</option>
        </select>
      </div>

      <div className="dropdown-container">
        <label>Select Subcategory</label>
        <select className="dropdown">
          <option value="model-paper">2022 model paper mcq</option>
          <option value="past-paper">2022 past paper</option>
          <option value="mcq">2020 MCQ</option>
        </select>
      </div>

      <div className="button-group">
        <label>Select Number Of Questions</label>
        <div className="number-question">
          <button>5</button>
          <button>10</button>
          <button>15</button>
          <button>20</button>
          <button>25</button>
          <button>30</button>
        </div>
      </div>

      <div className="button-group">
        <label>Select Time Period In Minutes</label>
        <div className="number-Minutes">
          <button>3</button>
          <button>6</button>
          <button>9</button>
          <button>12</button>
          <button>15</button>
          <button>18</button>
        </div>
      </div>

      <div className="start-button-container">
        <button className="start-button">START</button>
      </div>
    </div>
  );
}

export default SelfChallanges;
=======
import React from 'react';
import './SelfChallanges.css'; // Ensure this path is correct

function SelfChallanges() {
  return (
    <div className="self-challenges-page">
      <h2 className="title">Self Challenge</h2>
      <div className="dropdown-container">
        <label>Select Category</label>
        <select className="dropdown">
          <option value="science">Science (A/L)</option>
          <option value="maths">Maths</option>
          <option value="biology">Biology</option>
        </select>
      </div>

      <div className="dropdown-container">
        <label>Select Subcategory</label>
        <select className="dropdown">
          <option value="model-paper">2022 model paper mcq</option>
          <option value="past-paper">2022 past paper</option>
          <option value="mcq">2020 MCQ</option>
        </select>
      </div>

      <div className="button-group">
        <label>Select Number Of Questions</label>
        <div className="number-question">
          <button>5</button>
          <button>10</button>
          <button>15</button>
          <button>20</button>
          <button>25</button>
          <button>30</button>
        </div>
      </div>

      <div className="button-group">
        <label>Select Time Period In Minutes</label>
        <div className="number-Minutes">
          <button>3</button>
          <button>6</button>
          <button>9</button>
          <button>12</button>
          <button>15</button>
          <button>18</button>
        </div>
      </div>

      <div className="start-button-container">
        <button className="start-button">START</button>
      </div>
    </div>
  );
}

export default SelfChallanges;
>>>>>>> 794c63ecd842c809bf7d3409a8321b07854baa35
