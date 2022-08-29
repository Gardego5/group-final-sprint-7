package com.example.Sprint7Final.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Sprint7Final.dtos.TeamDto;
import com.example.Sprint7Final.services.TeamService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team/")
public class TeamController {
	
	private final TeamService teamService;
	
	@GetMapping
	public List<TeamDto> getTeams() {
		return teamService.getTeams();
	}
	
	@GetMapping("/{teamId}")
	public TeamDto getTeamById(@PathVariable Long teamId) {
		return teamService.getTeamById(teamId);
	}
}
