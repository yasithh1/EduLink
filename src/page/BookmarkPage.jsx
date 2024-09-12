import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './BookmarkPage.css'; 
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';

const BookmarkPage = () => {
    return (
        <div className="bookmark-page">
        <Navbar />
          <div className="bookmark-container">
         
            <div className="bookmark-header">
                <h1>Bookmarks</h1>
            </div>
            <div className="bookmark-content">
                <div className="bookmark-card">
                    <div className="bookmark-card-header">
                        <h2>Example</h2>
                    </div>
                    <div className="bookmark-card-body">
                        <p>Description of the bookmarked item goes here. This is a brief overview of what the bookmark is about.</p>
                    </div>
                </div>
                {/* Add more bookmark cards as needed */}
            </div>
            
         </div>
         <Footer/>
        </div>
    );
};

export default BookmarkPage;