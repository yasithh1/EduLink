
import React from 'react';
import reactSvg from '/src/assets/react.svg';
import { useNavigate } from 'react-router-dom'; 
import './Profile.css';


function Profile() {

  const navigate = useNavigate(); 

  const user = JSON.parse(localStorage.getItem('user')) || {};

  return (

    <div className="profile-container">
       <div className="square"/>
      <h2 className="profile-title">My Profile</h2>

       <div className="profile-card">
       <div className="profile-pictur">
         <img src={reactSvg} alt=""/>
       </div>
        <div className="profile-info">
          <h3 className="profile-name">
           {user.fname} {user.lname} 
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO2VPUpDQRSFPwPp09hFCy1dgbgICUljk8WomEItJLiLlEEQBFNkBdlESIJaiCH6DJGr58ElkC5zsZgDw8y8ucx35s7Pg6ysNDoBBkABzIEecECQWsAXsALegU+1Z8BhBLwQ8AaoAjXgQd96UfApsOvGzMQC+AB2UsNnqkfORFXbYVtTSQnvCDpaM3Gr/nNqeClvYqraVn9MANybKLejUPzW1HRX7XpDzKXGv4GzDN+Gmjnt5AMXeNVa7pHpbojppHpkTBNNbuUFaBAIr2vyV+BJ7aUzkRRuOhXgUf/uC5eJbmq46VyQq9/en4kyE8nhpr5A9zJhmXiLgpvGbrW+TCLg++4ADoE7oA0cEaQasBcFy/oX+gHC8pMH0EF+PAAAAABJRU5ErkJggg==" alt="Edit" className="edit-icon" />
          </h3>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      <div className="number-buttons">
        <button className="coin1">
        <img src="src/assets/icons8-coin-30.png" className="coin"/> {/* Coins History*/}
       </button>

       <button className="bookmark1" onClick={() => navigate('/bookmarks')}>
       <img src="src/assets/icons8-bookmark-30.png" className="bookmark"/>  {/* Bookmarks*/}
       </button>
     
      </div>



      <div className="opition-btn">
      <button className="btn1"> Invite Friends
      <img src="src/assets/icons8-invite-30.png" className="invite" />
      </button>

     <button className="btn2">Statistics
     <img src="src/assets/icons8-statistics-30.png" className="statices" />
     </button>
     <button className="btn3">Language
     <img src="src/assets/icons8-language-30.png" className="languge" />
     </button>

     <button className="btn4">Delete Account
     <img src="src/assets/icons8-denied-30.png" className="rate" />
     </button>


    </div>
  </div>


  );
}

export default Profile;
