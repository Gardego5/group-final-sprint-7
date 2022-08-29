package com.example.Sprint7Final.entities;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "user_table")
@Entity
@NoArgsConstructor
@Data
public class User {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Embedded
	private Credentials credentials;
	
	@Embedded
	private Profile profile;
	
	private boolean Active;
	
	private boolean Admin;
	
	private String status;
	
	@ManyToOne
	private Team team;
	
	@ManyToOne
	private Company company;
	
}
