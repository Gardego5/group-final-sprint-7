package com.example.Sprint7Final.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class Project {

	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	
	private String description;

	private Boolean active;
	
	@ManyToOne
	@JoinColumn
	private Team teamOnProject;
	
}
