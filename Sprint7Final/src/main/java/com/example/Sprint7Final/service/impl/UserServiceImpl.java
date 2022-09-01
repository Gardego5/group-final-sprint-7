package com.example.Sprint7Final.service.impl;


import com.example.Sprint7Final.dtos.CredentialsDto;
import com.example.Sprint7Final.dtos.UserRequestDto;
import com.example.Sprint7Final.entities.Credentials;
import com.example.Sprint7Final.entities.Profile;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.exceptions.NotFoundException;
import com.example.Sprint7Final.exceptions.NotValidCredentialsException;
import com.example.Sprint7Final.mappers.CredentialsMapper;
import com.example.Sprint7Final.repositories.TeamRepository;
import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.mappers.UserMapper;
import com.example.Sprint7Final.repositories.UserRepository;
import com.example.Sprint7Final.services.UserService;

import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final UserMapper userMapper;
	private final CredentialsMapper credentialsMapper;
	private final TeamRepository teamRepository;

	public User validateUserCredentialsMatchDatabase(CredentialsDto credentialsDto) {
		User userInDB = getUserByCredentials(credentialsDto);
		Credentials credentialsInDB = userInDB.getCredentials();
		Credentials sentCredentials = credentialsMapper.dtoToEntity(credentialsDto);

		if (!userInDB.isActive())
			throw new NotValidCredentialsException("User Not Active");

		if (!credentialsInDB.equals(sentCredentials))
			throw new NotValidCredentialsException("Invalid Password");

		userInDB.setStatus("JOINED");
		userRepository.saveAndFlush(userInDB);

		return getUserByCredentials(credentialsDto);
	}

	public boolean validateCredentialsForm(CredentialsDto credentialsDto) {
		return credentialsDto.getPassword() != null && credentialsDto.getUsername() != null;
	}

	public boolean validateUserNameExistsInDatabase(User user) {
		Optional<User> optionalUser = userRepository.findByCredentialsUsername(user.getCredentials().getUsername());
		return optionalUser.isPresent() && !optionalUser.get().isDeleted();
	}

	public User getUserByCredentials(CredentialsDto credentialsDto) {
		return getUserByUsernameReturnUserEntity(credentialsDto.getUsername());
	}

	public User getUserByUsernameReturnUserEntity(String username) {
		Optional<User> optionalUser = userRepository.findByCredentialsUsername(username);
		if (optionalUser.isEmpty() || optionalUser.get().isDeleted()) {
			throw new NotFoundException("User not found with username: " + username);
		}
		return optionalUser.get();
	}

	@Override
	public UserResponseDto getUser(CredentialsDto credentialsDto) {
		if (validateCredentialsForm(credentialsDto)) {
			return userMapper.entityToDto(validateUserCredentialsMatchDatabase(credentialsDto));
		}
		throw new NotValidCredentialsException("Invalid Username");
	}

	@Override
	public List<UserResponseDto> getUsersInCompany(Long companyId) {
		List<User> users = userRepository.findAllByDeletedFalse();
		List<User> tempUsers = new ArrayList<>();
		for (User user : users) {
			if (user.getCompany().getId().equals(companyId)) {
				tempUsers.add(user);
			}
		}
		return userMapper.entitiesToDtos(tempUsers);
	}

	@Override
	public UserResponseDto createUser(UserRequestDto userRequestDto) {
		User userToBeCreated = userMapper.dtoToEntity(userRequestDto);
		userToBeCreated.setCredentials(credentialsMapper.dtoToEntity(userRequestDto.getCredentials()));
		if (validateUserNameExistsInDatabase(userToBeCreated)) {
			throw new BadRequestException("User name already exists in the database.");
		}
		Profile profile = new Profile();
		profile.setFirstName(userRequestDto.getFirstName());
		profile.setLastName(userRequestDto.getLastName());
		profile.setPhone(userRequestDto.getPhone());
		profile.setEmail(userRequestDto.getEmail());
		userToBeCreated.setProfile(profile);
		return userMapper.entityToDto(userRepository.saveAndFlush(userToBeCreated));
	}

	@Override
	public UserResponseDto editUser(UserRequestDto userRequestDto, Long userId) {

		Optional<User> optionalUser = userRepository.findByIdAndDeletedFalse(userId);

		if (optionalUser.isEmpty()) {
			throw new NotFoundException("User could not be found in database with id: " + userId);
		}
		User userInDatabase = optionalUser.get();

		if (userRequestDto.getFirstName() != null) {
			userInDatabase.getProfile().setFirstName(userRequestDto.getFirstName());
		}
		if (userRequestDto.getLastName() != null) {
			userInDatabase.getProfile().setLastName(userRequestDto.getLastName());
		}
		if (userRequestDto.getEmail() != null) {
			userInDatabase.getProfile().setEmail(userRequestDto.getEmail());
		}
		if (userRequestDto.getPhone() != null) {
			userInDatabase.getProfile().setPhone(userRequestDto.getPhone());
		}
		if (userRequestDto.getActive() != null) {
			userInDatabase.setActive(userRequestDto.getActive());
		}
		if (userRequestDto.getAdmin() != null) {
			userInDatabase.setAdmin(userRequestDto.getAdmin());
		}
		if (userRequestDto.getStatus() != null) {
			userInDatabase.setStatus(userRequestDto.getStatus());
		}
		if (userRequestDto.getTeam().getId() != null) {
			Optional<Team> optionalTeam = teamRepository.findByIdAndDeletedFalse(userRequestDto.getTeam().getId());
			if (optionalTeam.isEmpty()) {
				throw new NotFoundException("Team not found in database with team id: " + userRequestDto.getTeam().getId());
			}
//			userInDatabase.setTeam();
		}
		if (userRequestDto.getCredentials().getUsername() != null) {
			userInDatabase.getCredentials().setUsername(userRequestDto.getCredentials().getUsername());
		}
		if (userRequestDto.getCredentials().getPassword() != null) {
			userInDatabase.getCredentials().setPassword(userRequestDto.getCredentials().getPassword());
		}

//	if (userRequestDto.get) {
//NOT FINISHED
//	}
		return null;
	}

	public UserResponseDto deleteUser(Long userId) {
		Optional<User> optionalUser = userRepository.findByIdAndDeletedFalse(userId);
		if (optionalUser.isEmpty() || optionalUser.get().isDeleted()) throw new NotFoundException("User does not exist with ID: " + userId);

		User userToDelete = optionalUser.get();
		userToDelete.setDeleted(true);

		return userMapper.entityToDto((userRepository.saveAndFlush(userToDelete)));

	}

}
