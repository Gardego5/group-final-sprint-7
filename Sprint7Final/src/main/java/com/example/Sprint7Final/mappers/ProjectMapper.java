package com.example.Sprint7Final.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.Sprint7Final.dtos.ProjectDto;
import com.example.Sprint7Final.entities.Project;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

	List<ProjectDto> entitiesToDto(List<Project> projects);
	
	ProjectDto entityToDto(Project project);

	
}
