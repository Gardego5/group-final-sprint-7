package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.mappers.TeamMapper;
import com.example.Sprint7Final.repositories.CompanyRepository;
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

	private final CompanyRepository companyRepository;

	//Private Validation Methods
	@Override
	public List<TeamResponseDto> getTeams() {
		List<Team> teams = teamRepository.findAllByDeletedFalse();
		return teamMapper.entitiesToResponseDtos(teams);
	}

	@Override
	public TeamResponseDto createTeams(TeamRequestDto teamRequestDto) {
		if (teamRequestDto.getTeamName() == null || teamRequestDto.getTeamDescription() == null || teamRequestDto.getCompanyID() == null) {
			throw new BadRequestException("Team name, description, or company were left blank");
		}
		if (companyRepository.findByIdAndDeletedFalse(teamRequestDto.getCompanyID()).isEmpty()) {
			throw new BadRequestException("Company does not exist");
		}
		Team teamToSave = teamMapper.teamRequestDtoToEntity(teamRequestDto);
		teamToSave.setTeamCompany(companyRepository.findByIdAndDeletedFalse(teamRequestDto.getCompanyID()).get());
		return teamMapper.entityToResponseDto(teamRepository.save(teamToSave));
	}

}