package com.pharma.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Starter {

    @GetMapping("/")
    public boolean readyForElectron()  {
        return true;
    }

    @PostMapping("/shutdown")
    public void shutdown() {
        new Thread(() -> {
            // Thread.sleep(500); // Optional delay before shutting down (if needed)
            System.exit(0);
        }).start();
    }
    
}
