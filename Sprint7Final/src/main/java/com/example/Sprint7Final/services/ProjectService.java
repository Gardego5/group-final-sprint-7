package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.ProjectDto;

public interface ProjectService {

	List<ProjectDto> getAllProjects();

	ProjectDto getProjectById(Long id);

	ProjectDto createProject(ProjectDto projectDto);

	ProjectDto updateProjectById(ProjectDto projectDto, Long projectId);

	List<ProjectDto> getProjectsByTeamId(Long teamId);

}
