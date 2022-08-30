package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.TeamDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;

public interface TeamService {

	List<TeamResponseDto> getTeams();
	
	TeamDto getTeamById(Long teamId);

}
