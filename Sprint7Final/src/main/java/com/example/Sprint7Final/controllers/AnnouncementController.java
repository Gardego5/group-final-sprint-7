package com.example.Sprint7Final.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Sprint7Final.dtos.AnnouncementResponseDto;
import com.example.Sprint7Final.services.AnnouncementService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/announcements")
public class AnnouncementController {
	
	private final AnnouncementService announcementService;
	
	@GetMapping
	public List<AnnouncementResponseDto> getAllAnnouncements() {
		return announcementService.getAllAnnouncements();
	}
	
	@GetMapping("/{companyId}")
	public List<AnnouncementResponseDto> getAllCompanyAnnouncements(@PathVariable Long companyId)  {
		return announcementService.getAllCompanyAnnouncements(companyId);
	}

}
