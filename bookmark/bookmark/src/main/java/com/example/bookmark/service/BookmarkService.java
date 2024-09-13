package com.example.bookmark.service;

import com.example.bookmark.model.Bookmark;
import com.example.bookmark.model.BookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkService
{
    @Autowired
    private BookmarkRepository bookmarkRepository;

    public List<Bookmark> getAllBookmarks()
    {
        return bookmarkRepository.findAll();
    }
}
