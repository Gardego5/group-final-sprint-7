package com.example.Sprint7Final.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class Company {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column
	private String description;
	
	@OneToMany(mappedBy = "company")
	private List<User> usersInTheCompany;
	
	@OneToMany(mappedBy = "companyMakingAnnouncement")
	private List<Announcement> companyAnnouncements;
	
	@OneToMany(mappedBy = "teamCompany")
	private List<Team> companyTeams;

}
