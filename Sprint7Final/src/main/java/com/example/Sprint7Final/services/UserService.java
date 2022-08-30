package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.CredentialsDto;
import com.example.Sprint7Final.dtos.UserRequestDto;
import com.example.Sprint7Final.dtos.UserResponseDto;

public interface UserService {

	UserResponseDto getUserById(Long id);

	UserResponseDto getUserByUsername(String username);

	UserResponseDto getUser(CredentialsDto credentialsDto);

	UserResponseDto createUser(CredentialsDto credentialsDto, UserRequestDto userRequestDto);
}
