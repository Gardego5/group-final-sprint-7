package com.example.Sprint7Final.service.impl;


import com.example.Sprint7Final.dtos.CredentialsDto;
import com.example.Sprint7Final.dtos.UserRequestDto;
import com.example.Sprint7Final.entities.Credentials;
import com.example.Sprint7Final.exceptions.BadRequestException;
import com.example.Sprint7Final.exceptions.NotAuthorizedException;
import com.example.Sprint7Final.exceptions.NotFoundException;
import com.example.Sprint7Final.mappers.CredentialsMapper;
import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.mappers.UserMapper;
import com.example.Sprint7Final.repositories.UserRepository;
import com.example.Sprint7Final.services.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
	private final CredentialsMapper credentialsMapper;

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
	public UserResponseDto createUser(CredentialsDto credentialsDto, UserRequestDto userRequestDto) {
		User user = getUserByCredentials(credentialsDto);
		User user2 = validateUserCredentialsMatchDatabase(credentialsDto);
		if (user2.isAdmin() && user.isActive()) {

		}
		User userToBeCreated = userMapper.dtoToEntity(userRequestDto);

		return null;
	}

	@Override
	public UserResponseDto getUserById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserResponseDto getUserByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}



}
