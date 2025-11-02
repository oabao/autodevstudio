package com.autodevstudio.userbilling;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/register")
    public String registerUser(@RequestBody String user) {
        // TODO: Implement user registration logic
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody String credentials) {
        // TODO: Implement user login logic
        return "User logged in successfully";
    }
}
