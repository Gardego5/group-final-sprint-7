package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.ProjectDto;
import com.example.Sprint7Final.entities.Project;
import com.example.Sprint7Final.mappers.ProjectMapper;
import com.example.Sprint7Final.mappers.TeamMapper;
import com.example.Sprint7Final.repositories.ProjectRepository;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.services.ProjectService;
import lombok.RequiredArgsConstructor;

import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

	private final ProjectRepository projectRepository;
	private final ProjectMapper projectMapper;
	private final TeamRepository teamRepository;
	
	public void update(Project updateData, @MappingTarget Project projectToUpdate) {
	}

	@Override
	public List<ProjectDto> getAllProjects() {
		return projectMapper.entitiesToDtos(projectRepository.findAll());
	}

	@Override
	public ProjectDto getProjectById(Long id) {
		return projectMapper.entityToDto(projectRepository.getReferenceById(id));
	}

	@Override
	public ProjectDto createProject(ProjectDto projectDto) {
		Project projectToSave = projectMapper.dtoToEntity(projectDto);
		return projectMapper.entityToDto(projectRepository.save(projectToSave));
	}

	@Override
	public ProjectDto updateProjectById(ProjectDto projectDto, Long projectId) {
		projectDto.setId(projectId);
		Project projectToUpdate = projectRepository.getReferenceById(projectId);
		Project updateData = projectMapper.dtoToEntity(projectDto);
		update(updateData, projectToUpdate);
		return projectMapper.entityToDto(projectRepository.save(projectToUpdate));
	}

	@Override
	public List<ProjectDto> getProjectsByTeamId(Long teamId) {
		return projectMapper.entitiesToDtos(teamRepository.getReferenceById(teamId).getTeamProjects());
	}
}
