package com.example.Sprint7Final.dtos;

import java.sql.Timestamp;

import com.example.Sprint7Final.entities.User;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AnnouncementRequestDto {

	private Long id;

	private Timestamp date;

	private String title;

	private String message;

	private CompanyDto company;

	private User user;

}
