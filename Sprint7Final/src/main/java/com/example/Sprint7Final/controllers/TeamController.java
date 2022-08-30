package com.example.Sprint7Final.controllers;

import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Credentials;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.services.TeamService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team")
public class TeamController {

	private final TeamService teamService;

	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<TeamResponseDto> getTeams(@RequestBody Param param) {
		if (param.getCredentials() == null) {
			throw new BadRequestException("No Credentials");
		}
		Credentials credentials = param.getCredentials();
		return teamService.getTeams(credentials);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public TeamResponseDto createTeam(@RequestBody Param param) {
		if (param.getCredentials() == null || param.getTeamRequestDto() == null) {
			throw new BadRequestException("No Credentials or Team");
		}
		Credentials credentials = param.getCredentials();
		TeamRequestDto teamRequestDto = param.getTeamRequestDto();
		return teamService.createTeams(credentials, teamRequestDto);
	}

}

@Data
class Param {
	private Credentials credentials;
	private TeamRequestDto teamRequestDto;
}