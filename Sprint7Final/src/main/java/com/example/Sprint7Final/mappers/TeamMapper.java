package com.example.Sprint7Final.mappers;

import com.example.Sprint7Final.dtos.TeamRequestDto;
import com.example.Sprint7Final.dtos.TeamResponseDto;
import com.example.Sprint7Final.entities.Team;

@Mapper(componentModel = "spring")

public interface TeamMapper {
	TeamResponseDto entityToDto (Team entity);
	
	Team teamRequestDtoToEntity (TeamRequestDto teamRequestDto);
	
	TeamRequestDto entityToRequestDto(Team team);

}
