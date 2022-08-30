package com.example.Sprint7Final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Sprint7Final.entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
