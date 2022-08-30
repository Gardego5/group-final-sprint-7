package com.example.Sprint7Final.controllers;

import java.util.List;

import com.example.Sprint7Final.dtos.CredentialsDto;
import com.example.Sprint7Final.dtos.UserRequestDto;
import com.example.Sprint7Final.entities.Credentials;
import org.springframework.web.bind.annotation.*;

import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.services.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	private final UserService userService;
	
	@PostMapping("/validate")
	public UserResponseDto getUser(@RequestBody CredentialsDto credentialsDto) {
		return userService.getUser(credentialsDto);
	}

	@PostMapping("/{companyId}")
	public List<UserResponseDto> getUsersInCompany(@RequestBody CredentialsDto credentialsDto, @PathVariable Long companyId) {
		return userService.getUsersInCompany(credentialsDto, companyId);
	}

	@PostMapping
	public UserResponseDto createUser(@RequestBody CredentialsDto credentialsDto, UserRequestDto userRequestDto) {
		return userService.createUser(credentialsDto, userRequestDto);
	}

}