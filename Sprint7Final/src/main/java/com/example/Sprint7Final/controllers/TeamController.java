package com.example.Sprint7Final.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.Sprint7Final.dtos.TeamDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.services.TeamService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team")
@CrossOrigin
public class TeamController {
	
	private final TeamService teamService;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<TeamResponseDto> getAllTeams() {
		return teamService.getAllTeams();
	}
	
	@GetMapping("/{teamId}")
	public TeamResponseDto getTeamById(@PathVariable Long teamId) {
		return teamService.getTeamById(teamId);
	}

}
