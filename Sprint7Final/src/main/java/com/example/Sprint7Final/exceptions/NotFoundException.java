package com.example.Sprint7Final.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter

public class NotFoundException extends RuntimeException {
	private static final long serialVersionUID = 753021661362554379L;
	private String message;

}
