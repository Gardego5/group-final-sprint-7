package com.example.Sprint7Final.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.Sprint7Final.dtos.ProjectDto;
import com.example.Sprint7Final.entities.Project;
import com.example.Sprint7Final.entities.Team;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

	List<ProjectDto> entitiesToDtos(List<Project> projects);
	
	ProjectDto entityToDto(Project project);

	Project dtoToEntity(ProjectDto projectDto);

}
