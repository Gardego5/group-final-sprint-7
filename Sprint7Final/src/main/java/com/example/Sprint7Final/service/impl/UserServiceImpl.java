package com.example.Sprint7Final.service.impl;

import java.util.List;


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

    @Override
    public List<UserResponseDto> getAllUsers() {
    	List<User> users = userRepository.findAllByDeletedFalse();
    	
    	for (User user : users) {
    		log.warn(user.getProfile().getFirstName());
    		log.warn("Is admin " + user.isAdmin());
    	}
		
        return userMapper.entitiesToDtos(userRepository.findAllByDeletedFalse());
    }

    @Override
    public UserResponseDto getUserById(Long id) {
        return null;
    }

    @Override
    public UserResponseDto getUserByUsername(String username) {
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
