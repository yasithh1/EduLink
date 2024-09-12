import React from 'react';
import './PopupMessage.css'; // Import the CSS file for styling the popup

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
      
        <h2>{message}</h2>
        <button className="popup-close" onClick={onClose}>Done</button>
      </div>
    </div>
  );
};

export default PopupMessage;
