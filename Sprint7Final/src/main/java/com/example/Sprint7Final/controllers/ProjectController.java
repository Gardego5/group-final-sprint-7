package com.example.Sprint7Final.controllers;

import java.util.List;

import com.example.Sprint7Final.services.ProjectService;
import org.springframework.web.bind.annotation.*;

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
	
	@GetMapping("{id}")
	public ProjectDto getProjectById(@PathVariable Long id) {
		return projectService.getProjectById(id);
	}
}