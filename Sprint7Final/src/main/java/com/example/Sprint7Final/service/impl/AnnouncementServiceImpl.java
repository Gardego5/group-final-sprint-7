package com.example.Sprint7Final.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.AnnouncementResponseDto;
import com.example.Sprint7Final.mappers.AnnouncementMapper;
import com.example.Sprint7Final.repositories.AnnouncementRepository;
import com.example.Sprint7Final.services.AnnouncementService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnnouncementServiceImpl implements AnnouncementService{

	private final AnnouncementRepository announcementRepository;
	private final AnnouncementMapper announcementMapper;

	@Override
	public List<AnnouncementResponseDto> getAllAnnouncements() {
		return announcementMapper.entitiesToDtos(announcementRepository.findAll());
	}

	@Override
	public List<AnnouncementResponseDto> getAllCompanyAnnouncements(Long companyId) {
		return null;
	}

}
