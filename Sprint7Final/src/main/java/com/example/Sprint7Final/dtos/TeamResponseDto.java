package com.example.Sprint7Final.dtos;


import com.example.Sprint7Final.entities.Company;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TeamResponseDto {

	private Long id;

	private String teamName;

	private String teamDescription;

	private CompanyDto teamCompany;
	
}