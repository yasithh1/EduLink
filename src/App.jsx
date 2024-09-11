
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login.jsx';
import MyProfile from './page/Profile.jsx'; 
import Signup from './page/SignUp.jsx';
import BookmarkPage from './page/BookmarkPage.jsx';
import Navbar from './component/Navbar.jsx';


function App() {
  return (
     <>
      <Router>
       <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile" element={<MyProfile />} />
       </Routes>
       </Router>

  
    </>
  );
}

export default App;
