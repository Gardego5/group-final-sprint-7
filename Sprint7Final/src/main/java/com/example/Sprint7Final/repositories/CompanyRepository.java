package com.example.Sprint7Final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Sprint7Final.entities.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}
