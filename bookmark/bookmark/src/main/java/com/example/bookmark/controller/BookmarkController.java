package com.example.bookmark.controller;

import com.example.bookmark.model.Bookmark;
import com.example.bookmark.service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BookmarkController
{
    @Autowired
    private BookmarkService bookmarkService;

    @GetMapping("/bookmarks")
    public List<Bookmark> getBookmarks() {
        return bookmarkService.getAllBookmarks();
    }
}
