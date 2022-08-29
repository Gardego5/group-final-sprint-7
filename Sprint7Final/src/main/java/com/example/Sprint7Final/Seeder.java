package com.example.Sprint7Final;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.Sprint7Final.entities.Company;
import com.example.Sprint7Final.entities.Credentials;
import com.example.Sprint7Final.entities.Profile;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.repositories.CompanyRepository;
import com.example.Sprint7Final.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {
	
	private final UserRepository userRepository;
	private final CompanyRepository companyRepository;

	@Override
	public void run(String... args) throws Exception {
		// --Company 1 ---
		Company company1 = new Company();
		company1.setName("Umbrella Corp");
		company1.setDescription("Making the world a better place - RnD");
		
		companyRepository.saveAndFlush(company1);
		
		// --- User 1 ---
		// Credentials
		Credentials user1Cred = new Credentials();
		user1Cred.setUsername("therealmc");
		user1Cred.setPassword("Password");
	
		User user1 = new User();
		user1.setCredentials(user1Cred);
	
		// Profile
		Profile user1Pro = new Profile(); 
		user1Pro.setFirstName("Master");
		user1Pro.setLastName("Chief");
		user1Pro.setEmail("sierra117@email.com");
		user1Pro.setPhone("123-456-7890");
		user1.setProfile(user1Pro);
	
		// Deleted
		user1.setActive(true);
	
		// --- User 2 ---
		// Credentials
		Credentials user2Cred = new Credentials();
		user2Cred.setUsername("mario");
		user2Cred.setPassword("password");
	
		User user2 = new User();
		user2.setCredentials(user2Cred);
	
		// Profile
		Profile user2Pro = new Profile();
		user2Pro.setFirstName("Mario");
		user2Pro.setLastName("Mario");
		user2Pro.setEmail("mario@email.com");
		user2Pro.setPhone("234-567-8901");
		user2.setProfile(user2Pro);
		// Deleted
		user2.setActive(false);
		
		userRepository.saveAndFlush(user1);
		userRepository.saveAndFlush(user2);
		
	}

}
