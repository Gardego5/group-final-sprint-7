package com.example.Sprint7Final.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.CompanyDto;
import com.example.Sprint7Final.mappers.CompanyMapper;
import com.example.Sprint7Final.repositories.CompanyRepository;
import com.example.Sprint7Final.services.CompanyService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService{
	
	private final CompanyRepository companyRepository;
	private final CompanyMapper companyMapper;

	@Override
	public List<CompanyDto> getAllCompanies() {
		return companyMapper.entitiesToDtos(companyRepository.findAll());
	}
 
	@Override
	public CompanyDto getCompany(Long id) {
		return companyMapper.entityToDto(companyRepository.getReferenceById(id));
	}

}
