package com.example.Sprint7Final.service.impl;

import com.example.Sprint7Final.dtos.ProjectDto;
import com.example.Sprint7Final.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    @Override
    public List<ProjectDto> getAllProjects() {
        return null;
    }

    @Override
    public ProjectDto getProjectById(Long id) {
        return null;
    }
}
