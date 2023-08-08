package com.pharma.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pharma.backend.model.Counter;
import com.pharma.backend.repository.CounterRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CounterService {

    @Autowired
    CounterRepo counterRepo;

    public void increment() {
        try {
            Counter c = counterRepo.getById(1);
            c.setCounter(c.getCounter() + 1);
            counterRepo.save(c);
        } catch (EntityNotFoundException e) {
            Counter c = Counter.builder().id(1).counter(1L).build();
            counterRepo.save(c);
        }
    }

    public Long view() {
        Counter c = counterRepo.findById(1).orElse(null);
        if (c != null) {
            return c.getCounter();
        } else {
            Counter c2 = Counter.builder().id(1).counter(0L).build();
            counterRepo.save(c2);
            return 0L;
        }
    }

}
