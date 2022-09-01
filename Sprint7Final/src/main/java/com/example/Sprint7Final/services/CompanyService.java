package com.example.Sprint7Final.services;

import java.util.List;

import com.example.Sprint7Final.dtos.CompanyDto;

public interface CompanyService {

	List<CompanyDto> getAllCompanies();

	CompanyDto getCompanyById(Long companyId);

}
