package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.mappers.TeamMapper;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.services.TeamService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
@Slf4j
public class TeamServiceImpl implements TeamService {

	private final TeamRepository teamRepository;
	private final TeamMapper teamMapper;

	//Private Validation Methods
	@Override
	public List<TeamResponseDto> getTeams() {
		List<Team> teams = teamRepository.findAllByDeletedFalse();
		return teamMapper.entitiesToResponseDtos(teams);
	}

	@Override
	public TeamResponseDto createTeams(TeamRequestDto teamRequestDto) {
		Team teamToSave = teamMapper.teamRequestDtoToEntity(teamRequestDto);
		if (teamToSave.getTeamName() == null || teamToSave.getTeamDescription() == null || teamToSave.getTeamCompany() == null
				|| teamToSave.getTeamCompany().getDescription() == null || teamToSave.getTeamCompany().getName() == null) {
			throw new BadRequestException("Team name, description, or company were left blank");
		}
		return teamMapper.entityToResponseDto(teamRepository.save(teamToSave));
	}

}