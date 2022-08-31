package com.example.Sprint7Final.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.example.Sprint7Final.dtos.AnnouncementRequestDto;
import com.example.Sprint7Final.entities.Announcement;
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
				log.warn(announcement.getAuthor().getId() + " users id");
				tempAnnouncements.add(announcement);

			}
		}
		return announcementMapper.entitiesToDtos(tempAnnouncements);
	}

	@Override
	public AnnouncementResponseDto createAnnouncement(AnnouncementRequestDto announcementRequestDto) {

		Announcement announcementToCreate = announcementMapper.dtoToEntity(announcementRequestDto);
		return announcementMapper.entityToDto(announcementRepository.saveAndFlush(announcementToCreate));
	}


}
