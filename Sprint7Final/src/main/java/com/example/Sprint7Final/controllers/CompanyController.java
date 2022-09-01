package com.example.Sprint7Final.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.Sprint7Final.dtos.CompanyDto;
import com.example.Sprint7Final.services.CompanyService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/company")
@CrossOrigin
public class CompanyController {
	
	private final CompanyService companyService;
	
	@GetMapping
	public List<CompanyDto> getAllCompanies() {
		return companyService.getAllCompanies();
	}
	
	@GetMapping("/{companyId}")
	public CompanyDto getCompanyById(@PathVariable Long companyId) {
		return companyService.getCompanyById(companyId);
	}

}
