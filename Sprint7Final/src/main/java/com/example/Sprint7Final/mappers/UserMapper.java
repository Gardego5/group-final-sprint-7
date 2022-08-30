package com.example.Sprint7Final.mappers;

import java.util.List;

import com.example.Sprint7Final.dtos.UserRequestDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.entities.User;

@Mapper(componentModel = "spring", uses = { ProfileMapper.class, CredentialsMapper.class})
public interface UserMapper {
	
	@Mapping(target = "username", source = "credentials.username")
	@Mapping(target = "firstName", source = "profile.firstName")
	@Mapping(target = "lastName", source = "profile.lastName")
	@Mapping(target = "email", source = "profile.email")
	@Mapping(target = "phone", source = "profile.phone")
	UserResponseDto entityToDto(User user);
	
	@Mapping(target = "username", source = "credentials.username")
	@Mapping(target = "firstName", source = "profile.firstName")
	@Mapping(target = "lastName", source = "profile.lastName")
	@Mapping(target = "email", source = "profile.email")
	@Mapping(target = "phone", source = "profile.phone")
	List<UserResponseDto> entitiesToDtos(List<User> users);

	User dtoToEntity(UserRequestDto userRequestDto);
}
