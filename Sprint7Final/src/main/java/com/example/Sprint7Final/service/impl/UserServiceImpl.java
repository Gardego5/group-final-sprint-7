package com.example.Sprint7Final.service.impl;


import com.example.Sprint7Final.dtos.CredentialsDto;
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

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
	private final CredentialsMapper credentialsMapper;

	@Override
	public UserResponseDto getUser(CredentialsDto credentialsDto) {

		log.warn(credentialsDto.getPassword() + " " + credentialsDto.getUsername());
		if (credentialsDto.getPassword() == null || credentialsDto.getUsername() == null) {
			throw new BadRequestException("Bad request");
		}
		for (User user : userRepository.findAllByDeletedFalse()) {
			if (user.getCredentials().equals(credentialsMapper.dtoToEntity(credentialsDto))){
				return userMapper.entityToDto(userRepository.findByCredentialsAndDeletedFalse(credentialsMapper.dtoToEntity(credentialsDto)).get());
			}
		}
		throw new NotAuthorizedException("Please check your username or password");
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
