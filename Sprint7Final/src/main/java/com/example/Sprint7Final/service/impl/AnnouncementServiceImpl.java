package com.example.Sprint7Final.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.Sprint7Final.dtos.AnnouncementRequestDto;
import com.example.Sprint7Final.entities.Announcement;
import com.example.Sprint7Final.entities.Company;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.repositories.CompanyRepository;
import com.example.Sprint7Final.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.AnnouncementResponseDto;
import com.example.Sprint7Final.mappers.AnnouncementMapper;
import com.example.Sprint7Final.repositories.AnnouncementRepository;
import com.example.Sprint7Final.services.AnnouncementService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Slf4j
public class AnnouncementServiceImpl implements AnnouncementService{

	private final AnnouncementRepository announcementRepository;
	private final AnnouncementMapper announcementMapper;
	private final UserRepository userRepository;
	private final CompanyRepository companyRepository;

	@Override
	public List<AnnouncementResponseDto> getAllAnnouncements() {
		return announcementMapper.entitiesToDtos(announcementRepository.findAll());
	}

	@Override
	public List<AnnouncementResponseDto> getAllCompanyAnnouncements(Long companyId) {
		List<Announcement> companyAnnouncements = announcementRepository.findAll();

		List<Announcement> tempAnnouncements = new ArrayList<>();
		for (Announcement announcement : companyAnnouncements) {
			if (announcement.getCompanyMakingAnnouncement().getId().equals(companyId)){
				tempAnnouncements.add(announcement);
			}
		}
		return announcementMapper.entitiesToDtos(tempAnnouncements);
	}

	@Override
	public AnnouncementResponseDto createAnnouncement(AnnouncementRequestDto announcementRequestDto) {

		//NEEDS LOGIC CHECK FOR IDS THAT DON'T EXIST
		//NEEDS LOGIC CHECK FOR IDS THAT DON'T EXIST
		//NEEDS LOGIC CHECK FOR IDS THAT DON'T EXIST
		Announcement announcementToCreate = announcementMapper.dtoToEntity(announcementRequestDto);
		Optional<User> userFromDatabase = userRepository.findById(announcementRequestDto.getUserId());
		Optional<Company> companyFromDatabase = companyRepository.findById(announcementRequestDto.getCompanyId());
		announcementToCreate.setAuthor(userFromDatabase.get());
		announcementToCreate.setCompanyMakingAnnouncement(companyFromDatabase.get());
		return announcementMapper.entityToDto(announcementRepository.saveAndFlush(announcementToCreate));
	}

}
