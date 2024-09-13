
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login.jsx';
import MyProfile from './page/Profile.jsx'; 
import Signup from './page/SignUp.jsx';
import BookmarkPage from './page/BookmarkPage.jsx';
import Home from './page/Home.jsx';



function App() {
  return (
     <>
      <Router>
       <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
       
       </Routes>
       </Router>

       
      


    </>
  );
}

export default App;
