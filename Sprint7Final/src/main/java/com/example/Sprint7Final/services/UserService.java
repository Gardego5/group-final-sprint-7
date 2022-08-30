package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.CredentialsDto;
import com.example.Sprint7Final.dtos.UserRequestDto;
import com.example.Sprint7Final.dtos.UserResponseDto;

public interface UserService {

	UserResponseDto getUser(CredentialsDto credentialsDto);

	List<UserResponseDto> getUsersInCompany(CredentialsDto credentialsDto, Long companyId);

	UserResponseDto createUser(UserRequestDto userRequestDto);
}
