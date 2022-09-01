package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Credentials;
import org.springframework.stereotype.Repository;

public interface TeamService {

	List<TeamResponseDto> getTeams();

	TeamResponseDto createTeams(TeamRequestDto teamRequestDto);

    List<TeamResponseDto> getTeamsByCompanyId(Long companyId);

    TeamResponseDto deleteTeam(Long teamId);

	TeamResponseDto getTeamById(Long teamId);

    TeamResponseDto editTeam(TeamRequestDto teamRequestDto, Long teamId);
}