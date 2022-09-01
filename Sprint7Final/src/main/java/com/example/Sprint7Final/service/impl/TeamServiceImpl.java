package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.exceptions.NotFoundException;
import com.example.Sprint7Final.mappers.TeamMapper;
import com.example.Sprint7Final.repositories.CompanyRepository;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.repositories.UserRepository;
import com.example.Sprint7Final.services.TeamService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@Slf4j
public class TeamServiceImpl implements TeamService {

	private final TeamRepository teamRepository;
	private final TeamMapper teamMapper;

	private final CompanyRepository companyRepository;
	private final UserRepository userRepository;

	//Private Validation Methods
	@Override
	public List<TeamResponseDto> getTeams() {
		List<Team> teams = teamRepository.findAllByDeletedFalse();
		return teamMapper.entitiesToResponseDtos(teams);
	}

	@Override
	public TeamResponseDto createTeams(TeamRequestDto teamRequestDto) {
		if (teamRequestDto.getTeamName() == null || teamRequestDto.getTeamDescription() == null
				|| teamRequestDto.getCompanyID() == null || teamRequestDto.getUsernames().isEmpty()) {
			throw new BadRequestException("Team name, description, company, or list of users were left blank");
		}

		if (companyRepository.findByIdAndDeletedFalse(teamRequestDto.getCompanyID()).isEmpty()) {
			throw new BadRequestException("Company does not exist");
		}

		List<User> usersToAdd = new ArrayList<>();
		for (String username : teamRequestDto.getUsernames()) {
			Optional<User> user = userRepository.findByCredentialsUsername(username);
			if (user.isEmpty() || user.get().isDeleted()) throw new NotFoundException(username + "not found.");
			usersToAdd.add(user.get());
		}


		Team teamToSave = teamMapper.teamRequestDtoToEntity(teamRequestDto);
		teamToSave.setUsersOnTheTeam(usersToAdd);
		teamToSave.setTeamCompany(companyRepository.findByIdAndDeletedFalse(teamRequestDto.getCompanyID()).get());
		teamRepository.save(teamToSave);
		for (User user : usersToAdd) {
			user.setTeam(teamToSave);
		}
		userRepository.saveAllAndFlush(usersToAdd);
		return teamMapper.entityToResponseDto(teamRepository.save(teamToSave));
	}

	@Override
	public List<TeamResponseDto> getTeamsByCompanyId(Long companyId) {

		List<Team> teamsToReturn = new ArrayList<>();
		for (Team team : teamRepository.findAllByDeletedFalse()) {
			if (team.getTeamCompany().getId().equals(companyId)) {
				teamsToReturn.add(team);
			}
		}
		if (teamsToReturn.size() < 1) {
			throw new BadRequestException("Could not find teams with company id: " + companyId);
		}
		return teamMapper.entitiesToResponseDtos(teamsToReturn);
	}

	@Override
	public TeamResponseDto deleteTeam(Long teamId) {
		Optional<Team> optionalTeam = teamRepository.findByIdAndDeletedFalse(teamId);
		if (optionalTeam.isEmpty() || optionalTeam.get().isDeleted()) throw new NotFoundException("Team does not exist with ID: " + teamId);

		Team teamToDelete = optionalTeam.get();
		teamToDelete.setDeleted(true);

		return teamMapper.entityToResponseDto(teamRepository.saveAndFlush(teamToDelete));
	}
}