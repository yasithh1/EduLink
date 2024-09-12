package com.example.Authentication.model;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "fname")
    private String firstName;

    @Column(name = "lname")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {  // Correct getter
        return firstName;
    }

    public void setFirstName(String firstName) {  // Correct setter
        this.firstName = firstName;
    }

    public String getLastName() {  // Correct getter
        return lastName;
    }

    public void setLastName(String lastName) {  // Correct setter
        this.lastName = lastName;
    }
}
