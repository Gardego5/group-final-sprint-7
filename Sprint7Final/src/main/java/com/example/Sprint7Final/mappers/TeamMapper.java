package com.example.Sprint7Final.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.Sprint7Final.dtos.TeamDto;
import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.entities.User;

@Mapper(componentModel = "spring")

public interface TeamMapper {
	TeamDto entityToDto (Team entity);
	
	Team teamRequestDtoToEntity (TeamRequestDto teamRequestDto);
	
	TeamRequestDto entityToRequestDto(Team team);
	
	List<TeamResponseDto> entitiesToDtos(List<Team> team);


}
