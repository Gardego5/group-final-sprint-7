package com.example.Sprint7Final.entities;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.springframework.data.annotation.CreatedDate;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class Announcement {
	
	@Id
    @GeneratedValue
    private Long id;
	
	@CreatedDate
    private Timestamp timePosted = Timestamp.valueOf(LocalDateTime.now());
	
	private String title;
	
	private String message;
	
	@ManyToOne
	private Company companyMakingAnnoucement;
	
	@OneToOne
	private User author;
}
