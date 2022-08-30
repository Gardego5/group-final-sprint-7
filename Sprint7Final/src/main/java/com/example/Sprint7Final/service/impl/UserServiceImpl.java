package com.example.Sprint7Final.service.impl;


import com.example.Sprint7Final.dtos.CredentialsDto;
import com.example.Sprint7Final.dtos.UserRequestDto;
import com.example.Sprint7Final.entities.Profile;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.exceptions.NotAuthorizedException;
import com.example.Sprint7Final.exceptions.NotFoundException;
import com.example.Sprint7Final.mappers.CredentialsMapper;
import com.example.Sprint7Final.mappers.ProfileMapper;
import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.mappers.UserMapper;
import com.example.Sprint7Final.repositories.UserRepository;
import com.example.Sprint7Final.services.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
	private final CredentialsMapper credentialsMapper;
	private final ProfileMapper profileMapper;

	public User validateUserCredentialsMatchDatabase(CredentialsDto credentialsDto) {
		if (getUserByCredentials(credentialsDto).getCredentials().equals(credentialsMapper.dtoToEntity(credentialsDto))) {
			return getUserByCredentials(credentialsDto);
		}
		throw new NotAuthorizedException("Please check your username or password");
	}

	public boolean validateCredentialsForm(CredentialsDto credentialsDto) {
		return credentialsDto.getPassword() != null && credentialsDto.getUsername() != null;
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
		throw new BadRequestException("Bad request");
	}

	@Override
	public List<UserResponseDto> getUsersInCompany(CredentialsDto credentialsDto, Long companyId) {
		//requires validation to view the information??
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

		// check credentials are good and credentialsDto is an admin

		User userToBeCreated = userMapper.dtoToEntity(userRequestDto);

		userToBeCreated.setCredentials(credentialsMapper.dtoToEntity(userRequestDto.getCredentials()));

		Profile profile = new Profile();
		profile.setFirstName(userRequestDto.getFirstName());
		profile.setLastName(userRequestDto.getLastName());
		profile.setPhone(userRequestDto.getPhone());
		profile.setEmail(userRequestDto.getEmail());

		userToBeCreated.setProfile(profile);

		return userMapper.entityToDto(userRepository.saveAndFlush(userToBeCreated));
	}

}
