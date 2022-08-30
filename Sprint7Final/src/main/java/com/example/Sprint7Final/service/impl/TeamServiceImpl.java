package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Credentials;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.exceptions.NotAuthorizedException;
import com.example.Sprint7Final.exceptions.NotFoundException;
import com.example.Sprint7Final.mappers.TeamMapper;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.repositories.UserRepository;
import com.example.Sprint7Final.services.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {

	private final TeamRepository teamRepository;
	private final TeamMapper teamMapper;
	private final UserRepository userRepository;

	//Private Validation Methods
	private void validateUser(Credentials credentials) {
		if (credentials.getUsername() == null || credentials.getPassword() == null) {
			throw new BadRequestException("Bad credentials");
		}

		Optional<User> optionalUser = userRepository.findByCredentialsAndDeletedFalse(credentials);
		if (optionalUser.isEmpty()) {
			throw new NotFoundException("User not found");
		} else if (!optionalUser.get().getCredentials().equals(credentials)) {
			throw new NotAuthorizedException("Invalid Credentials");
		}
	}

	private void validateAdmin(Credentials credentials) {
		if (credentials.getUsername() == null || credentials.getPassword() == null) {
			throw new BadRequestException("Bad credentials");
		}

		Optional<User> optionalUser = userRepository.findByCredentialsAndDeletedFalse(credentials);
		if (optionalUser.isEmpty()) {
			throw new NotFoundException("User not found");
		} else if (!optionalUser.get().getCredentials().equals(credentials)) {
			throw new NotAuthorizedException("Invalid Credentials");
		} else if (!optionalUser.get().isAdmin()) {
			throw new NotAuthorizedException("Not an Admin");
		}
	}

	@Override
	public List<TeamResponseDto> getTeams(Credentials credentials) {
		validateUser(credentials);
		return teamMapper.entitiesToDtos(teamRepository.findAllByDeletedFalse());
	}

	@Override
	public TeamResponseDto createTeams(Credentials credentials, TeamRequestDto teamRequestDto) {
		validateAdmin(credentials);
		Team team = teamMapper.teamRequestDtoToEntity(teamRequestDto);
		if (team.getTeamName() == null || team.getTeamDescription() == null || team.getTeamCompany() == null) {
			throw new BadRequestException("Team name, description, or company were left blank");
		}
		return teamMapper.entityToResponseDto(teamRepository.saveAndFlush(team));
	}

}