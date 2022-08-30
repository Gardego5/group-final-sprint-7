package com.example.Sprint7Final.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


import com.example.Sprint7Final.dtos.TeamDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.exceptions.NotFoundException;
import com.example.Sprint7Final.mappers.TeamMapper;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.services.TeamService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {
	
	private final TeamRepository teamRepository;
	private final TeamMapper teamMapper;
	
	private Team findTeam(Long id) {
		Optional<Team> optionalTeam = teamRepository.findById(id);
		if (optionalTeam.isEmpty()) {
			throw new NotFoundException("Team with Id of " + id + " was not found");
		}

		return optionalTeam.get();
	}

	@Override
	public List<TeamResponseDto> getAllTeams() {
		return teamMapper.entitiesToDtos(teamRepository.findAll());
	}

	@Override
	public TeamResponseDto getTeamById(Long teamId) {
		Team team = findTeam(teamId);
		return teamMapper.entityToDto(team);
	}

}
