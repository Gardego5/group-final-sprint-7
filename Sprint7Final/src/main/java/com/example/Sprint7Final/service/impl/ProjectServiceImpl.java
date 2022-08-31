package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.ProjectDto;
import com.example.Sprint7Final.dtos.ProjectRequestDto;
import com.example.Sprint7Final.dtos.ProjectResponseDto;
import com.example.Sprint7Final.entities.Project;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.exceptions.NotFoundException;
import com.example.Sprint7Final.mappers.ProjectMapper;
import com.example.Sprint7Final.repositories.CompanyRepository;
import com.example.Sprint7Final.repositories.ProjectRepository;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.services.ProjectService;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

	private final ProjectRepository projectRepository;
	private final ProjectMapper projectMapper;
	private final TeamRepository teamRepository;

	@Override
	public List<ProjectResponseDto> getAllProjects() {
		return projectMapper.entitiesToResponseDtos(projectRepository.findAll());
	}

	@Override
	public ProjectResponseDto getProjectById(Long id) {
		return projectMapper.entityToResponseDto(projectRepository.getReferenceById(id));
	}

	@Override
	public ProjectResponseDto createProject(ProjectRequestDto projectRequestDto) {
		Project projectToSave = projectMapper.requestDtoToEntity(projectRequestDto);
		Team teamInDatabase = teamRepository.getReferenceById(projectRequestDto.getTeamId());
		projectToSave.setTeamOnProject(teamInDatabase);
		projectToSave.setActive(projectRequestDto.getActive());
		return projectMapper.entityToResponseDto(projectRepository.saveAndFlush(projectToSave));
	}

	@Override
	public ProjectResponseDto updateProjectById(ProjectRequestDto projectRequestDto, Long projectId) {
		
		Optional<Project> optionalProject = projectRepository.findById(projectId);
		if (optionalProject.isEmpty()) {
			throw new NotFoundException("Project not found with id: " + projectId);
		}
		Project projectToUpdate = optionalProject.get();
		if (projectRequestDto.getName() != null) {
			projectToUpdate.setName(projectRequestDto.getName());
		}
		if (projectRequestDto.getDescription() != null) {
			projectToUpdate.setDescription(projectRequestDto.getDescription());
		}
		if (projectRequestDto.getActive() != null) {
			projectToUpdate.setActive(projectRequestDto.getActive());
		}
		return projectMapper.entityToResponseDto(projectRepository.save(projectToUpdate));
	}

	@Override
	public List<ProjectResponseDto> getProjectsByTeamId(Long teamId) {
		Optional<Team> optionalTeam = teamRepository.findByIdAndDeletedFalse(teamId);
		if (optionalTeam.isEmpty() || optionalTeam.get().getTeamProjects().size() < 1) {
			throw new NotFoundException("Team not found or no projects found with id: " + teamId);
		}
		return projectMapper.entitiesToResponseDtos(teamRepository.findByIdAndDeletedFalse(teamId).get().getTeamProjects());
	}

	@Override
	public List<ProjectResponseDto> getProjectsByCompanyId(Long companyId) {
		List<Project> projects = projectRepository.findAll();
		List<Project> projectsToReturn = new ArrayList<>();
		for(Project project : projects) {
			if(project.getTeamOnProject().getTeamCompany().getId().equals(companyId)) {
				projectsToReturn.add(project);
			}
		}
		if (projectsToReturn.size() < 1) {
			throw new BadRequestException("No projects found with company id: " + companyId);
		}
		return projectMapper.entitiesToResponseDtos(projectsToReturn);
	}
}
