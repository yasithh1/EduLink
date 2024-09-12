package com.example.Authentication.service;


import com.example.Authentication.model.User;
import com.example.Authentication.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {

        return userRepository.save(user);
    }

    public User findUserByEmail(String email)
    {
        return userRepository.findByEmail(email).orElse(null);
    }

}
