import React, { useState } from 'react';
import reactSvg from '/src/assets/react.svg';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';
import EditProfileForm from '../component/EditProfileForm.jsx';
import coinIcon from '/src/assets/icons8-coin-30.png';
import bookmarkIcon from '/src/assets/icons8-bookmark-30.png';
import inviteIcon from '/src/assets/icons8-invite-30.png';
import statisticsIcon from '/src/assets/icons8-statistics-30.png';
import languageIcon from '/src/assets/icons8-language-30.png';
import deleteIcon from '/src/assets/icons8-denied-30.png';

function Profile() {
  const navigate = useNavigate();
  const [showEditForm, setShowEditForm] = useState(false);
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const handleUpdate = async (updatedUser) => {
    try {
      // Simulated API call or you can replace with axios or fetch
      const response = { data: updatedUser }; // Mock response
      localStorage.setItem('user', JSON.stringify(response.data));
      setShowEditForm(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="square" />
      <h2 className="profile-title">My Profile</h2>

      <div className="profile-card">
        <div className="profile-picture">
          <img src={reactSvg} alt="" />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">
            {user.fname} {user.lname}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO2VPUpDQRSFPwPp09hFCy1dgbgICUljk8WomEItJLiLlEEQBFNkBdlESIJaiCH6DJGr58ElkC5zsZgDw8y8ucx35s7Pg6ysNDoBBkABzIEecECQWsAXsALegU+1Z8BhBLwQ8AaoAjXgQd96UfApsOvGzMQC+AB2UsNnqkfORFXbYVtTSQnvCDpaM3Gr/nNqeClvYqraVn9MANybKLejUPzW1HRX7XpDzKXGv4GzDN+Gmjnt5AMXeNVa7pHpbojppHpkTBNNbuUFaBAIr2vyV+BJ7aUzkRRuOhXgUf/uC5eJbmq46VyQq9/en4kyE8nhpr5A9zJhmXiLgpvGbrW+TCLg++4ADoE7oA0cEaQasBcFy/oX+gHC8pMH0EF+PAAAAABJRU5ErkJggg=="
              alt="Edit"
              className="edit-icon"
              onClick={() => setShowEditForm(true)}
            />
          </h3>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      <div className="number-buttons">
        <button className="coin1">
          <img src={coinIcon} className="coin" alt="coin history" />
        </button>

        <button className="bookmark1" onClick={() => navigate('/bookmarks')}>
          <img src={bookmarkIcon} className="bookmark" alt="bookmarks" />
        </button>
      </div>

      <div className="opition-btn">
        <button className="btn1">
          Invite Friends
          <img src={inviteIcon} className="invite" alt="invite friends" />
        </button>

        <button className="btn2">
          Statistics
          <img src={statisticsIcon} className="statices" alt="statistics" />
        </button>

        <button className="btn3">
          Language
          <img src={languageIcon} className="languge" alt="language" />
        </button>

        <button className="btn4">
          Delete Account
          <img src={deleteIcon} className="rate" alt="delete account" />
        </button>
      </div>

      {showEditForm && (
        <EditProfileForm
          user={user}
          onUpdate={handleUpdate}
          onClose={() => setShowEditForm(false)}
        />
      )}
    </div>
  );
}

export default Profile;
