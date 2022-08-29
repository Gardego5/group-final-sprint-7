package com.example.Sprint7Final.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.mappers.UserMapper;
import com.example.Sprint7Final.repositories.UserRepository;
import com.example.Sprint7Final.services.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public List<UserResponseDto> getAllUsers() {
        return userMapper.entitiesToDtos(userRepository.findAllByDeletedFalse());
    }

    @Override
    public UserResponseDto getUser(String username) {
        // TODO Auto-generated method stub
        return null;
    }

}
