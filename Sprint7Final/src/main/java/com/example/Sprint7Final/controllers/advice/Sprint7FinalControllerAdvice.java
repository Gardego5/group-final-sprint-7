package com.example.Sprint7Final.controllers.advice;

import com.example.Sprint7Final.dtos.ErrorDto;
import com.example.Sprint7Final.exceptions.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice(basePackages = {"com.example.Sprint7Final.controllers"})
@ResponseBody
public class Sprint7FinalControllerAdvice {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotFoundException.class)
    public ErrorDto handleBadRequestException(HttpServletRequest request, NotFoundException notFoundException) {
        return new ErrorDto(notFoundException.getMessage());
    }
}
