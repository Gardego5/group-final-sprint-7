package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.UserResponseDto;

public interface UserService {

	List<UserResponseDto> getAllUsers();

	UserResponseDto getUserById(Long id);

	UserResponseDto getUserByUsername(String username);

}
