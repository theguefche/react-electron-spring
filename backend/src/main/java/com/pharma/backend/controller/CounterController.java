package com.pharma.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pharma.backend.service.CounterService;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:3000")
public class CounterController {

    @Autowired
    CounterService counterService;

    @GetMapping("/view")
    public ResponseEntity<?> view() throws InterruptedException {
        Thread.sleep(5000);
        return ResponseEntity.ok().body(counterService.view());
    }

    @GetMapping("/increment")
    public ResponseEntity<?> increment() throws InterruptedException {
        Thread.sleep(5000);
        counterService.increment();
        return ResponseEntity.ok().body("done");
    }
}
