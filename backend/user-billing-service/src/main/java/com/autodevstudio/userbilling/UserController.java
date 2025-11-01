// backend/user-billing-service/src/main/java/com/autodevstudio/userbilling/UserController.java
package com.autodevstudio.userbilling;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/register")
    public String registerUser(@RequestBody UserRegistrationRequest request) {
        // TODO: Implement user registration logic
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody UserLoginRequest request) {
        // TODO: Implement user login logic
        return "User logged in successfully";
    }
}

// Dummy request objects for compilation
class UserRegistrationRequest {
    public String email;
    public String password;
    public String name;
}

class UserLoginRequest {
    public String email;
    public String password;
}
