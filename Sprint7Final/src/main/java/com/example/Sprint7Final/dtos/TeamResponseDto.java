package com.example.Sprint7Final.dtos;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TeamResponseDto {
	
	private String teamName;
	
	private String teamDescription;
	
	private CompanyDto teamCompany;
	
}
