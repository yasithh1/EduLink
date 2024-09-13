import React, { useState } from 'react';
import axios from 'axios';
import './EditProfileForm.css';

function EditProfileForm({ user, onClose }) {
  const [fname, setFname] = useState(user.fname || '');
  const [lname, setLname] = useState(user.lname || '');
  const [email, setEmail] = useState(user.email || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the updated user data to the backend
      const response = await axios.put('http://localhost:8080/api/users/update', {
        id: user.id,  // assuming user has an id
        fname,
        lname,
        email,
      });

      if (response.status === 200) {
        // You can update localStorage with the new data
        localStorage.setItem('user', JSON.stringify(response.data));

        // Close the form after successful update
        onClose();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="edit-form-container">
      <form className="edit-form" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>
        <label>First Name</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Update Profile</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EditProfileForm;
