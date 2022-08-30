package com.example.Sprint7Final.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Sprint7Final.entities.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

	Team findByTeamName(String name);
	List<Team> findAll();
	
}
