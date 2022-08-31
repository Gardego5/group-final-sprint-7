package com.example.Sprint7Final.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Sprint7Final.dtos.CompanyDto;
import com.example.Sprint7Final.services.CompanyService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/company")
public class CompanyController {
	
	private final CompanyService companyService;
	
	@GetMapping
	public List<CompanyDto> getAllCompanies() {
		return companyService.getAllCompanies();
	}

}
