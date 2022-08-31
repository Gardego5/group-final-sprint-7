package com.example.Sprint7Final.controllers;

import java.util.List;

import com.example.Sprint7Final.services.ProjectService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Sprint7Final.dtos.ProjectDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/project")
@CrossOrigin
public class ProjectController {
	private final ProjectService projectService;

	@GetMapping
	public List<ProjectDto> getAllProjects() {
		return projectService.getAllProjects();
	}

	@GetMapping("/{id}")
	public ProjectDto getProjectById(@PathVariable Long id) {
		return projectService.getProjectById(id);
	}

	@PostMapping
	public ProjectDto createProject(@RequestBody ProjectDto projectDto) {
		return projectService.createProject(projectDto);
	}

	@GetMapping("/team/{teamId}")
	public List<ProjectDto> getProjectsByTeamId(@PathVariable Long teamId) {
		return projectService.getProjectsByTeamId(teamId);
	}

	@PutMapping("/{projectId}")
	public ProjectDto updateProjectById(@RequestBody ProjectDto projectDto, @PathVariable Long projectId) {
		return projectService.updateProjectById(projectDto, projectId);
	}

}