package com.example.Sprint7Final.dtos;

import java.sql.Timestamp;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserResponseDto {
	
	private String username;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String phoneNumber;
	
	private Boolean isActive;
	
	private Boolean isAdmin;
	
	private String status;
	
	private Timestamp joined;
	
	private TeamDto team;
	
	private CompanyDto company;
}
