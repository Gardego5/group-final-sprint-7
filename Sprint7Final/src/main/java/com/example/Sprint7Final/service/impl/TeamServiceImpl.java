package com.example.Sprint7Final.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.TeamDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.mappers.TeamMapper;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.services.TeamService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {
	
	TeamRepository teamRepository;
	TeamMapper teamMapper;

	@Override
	public List<TeamResponseDto> getAllTeams() {
		return teamMapper.entitiesToDtos(teamRepository.findAll());
	}

	@Override
	public TeamResponseDto getTeamById(Long teamId) {
		// TODO Auto-generated method stub
		return null;
	}

}
