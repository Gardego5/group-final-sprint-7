package com.example.Sprint7Final.dtos;

import com.example.Sprint7Final.entities.Company;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class TeamRequestDto {
private String teamName;
private String teamDescription;
private Company company;
}
