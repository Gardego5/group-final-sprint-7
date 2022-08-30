package com.example.Sprint7Final.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Sprint7Final.dtos.ProjectDto;
import com.example.Sprint7Final.services.ProjectService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/project")
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
}