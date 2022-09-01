package com.example.Sprint7Final.service.impl;

import java.util.List;
import java.util.Optional;

import com.example.Sprint7Final.dtos.CompanyRequestDto;
import com.example.Sprint7Final.entities.Company;
import com.example.Sprint7Final.exceptions.BadRequestException;
import org.springframework.stereotype.Service;

import com.example.Sprint7Final.dtos.CompanyDto;
import com.example.Sprint7Final.entities.Company;
import com.example.Sprint7Final.exceptions.NotFoundException;
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
		return companyMapper.entitiesToDtos(companyRepository.findAllByDeletedFalse());
	}

	@Override

	public CompanyDto getCompanyById(Long companyId) {
		Optional<Company> company = companyRepository.findByIdAndDeletedFalse(companyId);
		if (company.isEmpty()) {
			throw new NotFoundException("Company with id of " + companyId + " was not found.");
		}
		return companyMapper.entityToDto(company.get());

	}

	public CompanyDto createCompany(CompanyRequestDto companyRequestDto) {
		Company companyToAdd = companyMapper.dtoToEntity(companyRequestDto);
		if (companyToAdd.getCompanyName() == null || companyToAdd.getCompanyDescription() == null) {
			throw new BadRequestException("Missing Company name or description");
		}
		return companyMapper.entityToDto(companyRepository.saveAndFlush(companyToAdd));

	}

}
