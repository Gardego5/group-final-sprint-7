package com.example.Sprint7Final;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.Sprint7Final.entities.Company;
import com.example.Sprint7Final.entities.Credentials;
import com.example.Sprint7Final.entities.Profile;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.entities.User;
import com.example.Sprint7Final.repositories.CompanyRepository;
import com.example.Sprint7Final.repositories.TeamRepository;
import com.example.Sprint7Final.repositories.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class Seeder implements CommandLineRunner {

	private final UserRepository userRepository;
	private final CompanyRepository companyRepository;
	private final TeamRepository teamRepository;

	@Override
	public void run(String... args) throws Exception {
		// --Company 1 ---
		Company company1 = new Company();
		company1.setCompanyName("Umbrella Corp");
		company1.setCompanyDescription("Making the world a better place - RnD");

		companyRepository.saveAndFlush(company1);

		// --Company 2 ---
		Company company2 = new Company();
		company2.setCompanyName("Aperture Science Innovators");
		company2.setCompanyDescription("The cake is not a lie...");
		companyRepository.saveAndFlush(company2);
		
		// team creations
		
		Team team1 = new Team();
		team1.setTeamName("Team 1!");
		team1.setTeamCompany(company1);
		team1.setTeamDescription("Team 1 rocks!");
		
		Team team2 = new Team();
		team2.setTeamName("Team 2!");
		team2.setTeamCompany(company2);
		team2.setTeamDescription("Team 2 is better!");
		
		teamRepository.saveAndFlush(team1);
		teamRepository.saveAndFlush(team2);

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
		user1.setCompany(company1);
		user1.setTeam(team1);
		user1.setStatus("Default");

		// Active
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
		user2.setCompany(company2);
		user2.setTeam(team1);
		user2.setStatus("Default");
		// Active
		user2.setActive(false);

		// --- User 3 ---
		// Credentials
		Credentials user3Cred = new Credentials();
		user3Cred.setUsername("GLaDOS");
		user3Cred.setPassword("password12");

		User user3 = new User();
		user3.setCredentials(user3Cred);

		// Profile
		Profile user3Pro = new Profile();
		user3Pro.setFirstName("GLa");
		user3Pro.setLastName("DOS");
		user3Pro.setEmail("theCakeIsALie@email.com");
		user3Pro.setPhone("234-567-1111");
		user3.setProfile(user3Pro);
		user3.setAdmin(true);
		user3.setCompany(company2);
		user3.setTeam(team2);
		user3.setStatus("Default");
		// Active
		user3.setActive(true);

		// --- User 4 ---
		// Credentials
		Credentials user4Cred = new Credentials();
		user4Cred.setUsername("Steve");
		user4Cred.setPassword("minecraft");

		User user4 = new User();
		user4.setCredentials(user4Cred);

		// Profile
		Profile user4Pro = new Profile();
		user4Pro.setFirstName("Steve");
		user4Pro.setLastName("Steve");
		user4Pro.setEmail("mojang@email.com");
		user4Pro.setPhone("234-555-8901");
		user4.setProfile(user4Pro);
		user4.setCompany(company1);
		user4.setTeam(team2);
		user4.setStatus("Default");
		// Active
		user4.setActive(true);

		// --- User 5 ---
		// Credentials
		Credentials user5Cred = new Credentials();
		user5Cred.setUsername("Steve2PointOH");
		user5Cred.setPassword("minecraft");

		User user5 = new User();
		user5.setCredentials(user5Cred);

		// Profile
		Profile user5Pro = new Profile();
		user5Pro.setFirstName("Carl");
		user5Pro.setLastName("That");
		user5Pro.setEmail("killspeople@email.com");
		user5Pro.setPhone("234-555-8901");
		user5.setProfile(user5Pro);
		user5.setCompany(company1);
		user5.setTeam(team2);
		user5.setStatus("Default");
		// Active
		user5.setActive(true);

		// --- User 6 ---
		// Credentials
		Credentials user6Cred = new Credentials();
		user6Cred.setUsername("James");
		user6Cred.setPassword("lovesPeaches");

		User user6 = new User();
		user6.setCredentials(user6Cred);

		// Profile
		Profile user6Pro = new Profile();
		user6Pro.setFirstName("Francis");
		user6Pro.setLastName("Popeman");
		user6Pro.setEmail("vatican@email.com");
		user6Pro.setPhone("234-555-6978");
		user6.setProfile(user6Pro);
		user6.setCompany(company1);
		user6.setTeam(team2);
		user6.setStatus("Default");
		// Active
		user6.setActive(true);

		// --- User 7 ---
		// Credentials
		Credentials user7Cred = new Credentials();
		user7Cred.setUsername("Alex");
		user7Cred.setPassword("minecraft");

		User user7 = new User();
		user7.setCredentials(user7Cred);

		// Profile
		Profile user7Pro = new Profile();
		user7Pro.setFirstName("Alex");
		user7Pro.setLastName("Steve");
		user7Pro.setEmail("mojang2@email.com");
		user7Pro.setPhone("211-551-8901");
		user7.setProfile(user7Pro);
		user7.setCompany(company1);
		user7.setTeam(team2);
		user7.setStatus("Default");
		// Active
		user7.setActive(true);

		// --- User 8 ---
		// Credentials
		Credentials user8Cred = new Credentials();
		user8Cred.setUsername("DonkeyKong");
		user8Cred.setPassword("bananas");

		User user8 = new User();
		user8.setCredentials(user8Cred);

		// Profile
		Profile user8Pro = new Profile();
		user8Pro.setFirstName("Donkey");
		user8Pro.setLastName("Kong");
		user8Pro.setEmail("nintendo@email.com");
		user8Pro.setPhone("234-555-8999");
		user8.setProfile(user8Pro);
		user8.setCompany(company1);
		user8.setTeam(team2);
		user8.setStatus("Default");
		// Active
		user8.setActive(true);

		userRepository.saveAndFlush(user1);
		userRepository.saveAndFlush(user2);
		userRepository.saveAndFlush(user3);
		userRepository.saveAndFlush(user4);
		userRepository.saveAndFlush(user4);
		userRepository.saveAndFlush(user5);
		userRepository.saveAndFlush(user6);
		userRepository.saveAndFlush(user7);
		userRepository.saveAndFlush(user8);
		
		// --Team 1 ---
		List<User> team1Users = new ArrayList<>();
		team1Users.add(user1);
		team1Users.add(user2);

		
		Team team1FromRepo = teamRepository.findByTeamName(team1.getTeamName());
		team1FromRepo.setUsersOnTheTeam(team1Users);
		teamRepository.saveAndFlush(team1FromRepo);
		
		log.warn( "Team Id returned for team1 " + team1FromRepo.getId());
		
		// --Team 2 ---
		List<User> team2Users = new ArrayList<>();
		team2Users.add(user3);
		team2Users.add(user4);
		team2Users.add(user5);
		team2Users.add(user6);
		team2Users.add(user7);
		team2Users.add(user8);
	
		
		teamRepository.findByTeamName(team2.getTeamName()).setUsersOnTheTeam(team2Users);
		
		teamRepository.saveAndFlush(team1);
		teamRepository.saveAndFlush(team2);
	}

}
