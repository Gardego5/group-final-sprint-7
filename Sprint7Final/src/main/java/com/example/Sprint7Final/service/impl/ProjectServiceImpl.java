package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.ProjectDto;
import com.example.Sprint7Final.entities.Project;
import com.example.Sprint7Final.mappers.ProjectMapper;
import com.example.Sprint7Final.repositories.ProjectRepository;
import com.example.Sprint7Final.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
	
	private final ProjectRepository projectRepository;
	private final ProjectMapper projectMapper;
	
    @Override
    public List<ProjectDto> getAllProjects() {
        return projectMapper.entitiesToDto(projectRepository.findAll());
    }

    @Override
    public ProjectDto getProjectById(Long id) {
        return projectMapper.entityToDto(projectRepository.getReferenceById(id));
    }

	@Override
	public ProjectDto createProject(ProjectDto projectDto) {
		// TODO: Possible reworking
		Project projectToSave = projectRepository.save(projectMapper.dtoToEntity(projectDto));
		return projectMapper.entityToDto(projectRepository.save(projectToSave));
	}
}
