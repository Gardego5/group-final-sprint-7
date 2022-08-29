package com.example.Sprint7Final.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class Team {
	@Id
    @GeneratedValue
    private Long id;
	
	private String teamName;
	
	private String teamDescription;
	
	@OneToOne
	private Company company;
	
	@OneToMany(mappedBy = "team")
	private List<User> usersOnTheTeam;
	
	@OneToMany(mappedBy = "teamOnProject")
	private List<Project> teamProjects;
}
