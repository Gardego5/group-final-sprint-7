package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.TeamDto;

public interface TeamService {

	List<TeamDto> getTeams();
	
	TeamDto getTeamById(Long teamId);

}
