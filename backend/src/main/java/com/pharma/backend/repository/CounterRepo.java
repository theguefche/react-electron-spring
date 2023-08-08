package com.pharma.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pharma.backend.model.Counter;

public interface CounterRepo extends JpaRepository<Counter,Integer> {
    
}
