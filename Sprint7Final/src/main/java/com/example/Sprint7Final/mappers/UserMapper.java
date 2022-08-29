package com.example.Sprint7Final.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.entities.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
	
	UserResponseDto entityToDto(User user);
	
	List<UserResponseDto> entitiesToDtos(List<User> users);

}
