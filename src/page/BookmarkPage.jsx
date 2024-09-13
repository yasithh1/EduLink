import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookmarkPage.css';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';

const BookmarkPage = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // Fetch bookmarks from the backend when the component mounts
        axios.get('http://localhost:8080/api/bookmarks')
            .then(response => {
                setBookmarks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the bookmarks!', error);
            });
    }, []);

    return (
        <div className="bookmark-page">
            <Navbar />
            <div className="bookmark-container">
                <div className="bookmark-header">
                    <h1>Bookmarks</h1>
                </div>
                <div className="bookmark-content">
                    {bookmarks.length > 0 ? (
                        bookmarks.map(bookmark => (
                            <div className="bookmark-card" key={bookmark.id}>
                                <div className="bookmark-card-header">
                                    <h2>{bookmark.title}</h2>
                                </div>
                                <div className="bookmark-card-body">
                                    <p>{bookmark.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No bookmarks available.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookmarkPage;
