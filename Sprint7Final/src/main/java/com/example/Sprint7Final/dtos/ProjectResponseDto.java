package com.example.Sprint7Final.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProjectResponseDto {
	
	private Long id;
	
	private String name;
	
	private String description;
	
	private Boolean active;
	
	private TeamDto teamOnProject;
}