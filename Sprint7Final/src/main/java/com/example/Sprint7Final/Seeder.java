package com.example.Sprint7Final;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.example.Sprint7Final.entities.*;
import com.example.Sprint7Final.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.jms.artemis.ArtemisNoOpBindingRegistry;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class Seeder implements CommandLineRunner {

	private final UserRepository userRepository;
	private final CompanyRepository companyRepository;
	private final TeamRepository teamRepository;
	private final AnnouncementRepository announcementRepository;
	private final ProjectRepository projectRepository;

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

		Team team3 = new Team();
		team3.setTeamName("Team 3!");
		team3.setTeamCompany(company1);
		team3.setTeamDescription("Team 3 rocks!");

		Team team4 = new Team();
		team4.setTeamName("Team 4!");
		team4.setTeamCompany(company1);
		team4.setTeamDescription("Team 4 is better!");

		Team team5 = new Team();
		team5.setTeamName("Team 5!");
		team5.setTeamCompany(company2);
		team5.setTeamDescription("Team 5 is the best!");

		teamRepository.saveAndFlush(team3);
		teamRepository.saveAndFlush(team4);
		teamRepository.saveAndFlush(team5);

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
		user1.setTeam(team3);
		user1.setStatus("PENDING");

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
		user2.setTeam(team5);
		user2.setStatus("JOINED");
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
		user3.setTeam(team5);
		user3.setStatus("JOINED");

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
		user4.setTeam(team4);
		user4.setStatus("PENDING");

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
		user5.setTeam(team4);
		user5.setStatus("PENDING");

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
		user6.setTeam(team4);
		user6.setStatus("JOINED");

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
		user7.setTeam(team4);
		user7.setStatus("PENDING");

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
		user8.setTeam(team4);
		user8.setStatus("PENDING");

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

		Team team1FromRepo = teamRepository.findByTeamName(team3.getTeamName());
		team1FromRepo.setUsersOnTheTeam(team1Users);
		teamRepository.saveAndFlush(team1FromRepo);

		log.warn("Team Id returned for team1 " + team1FromRepo.getId());

		// --Team 2 ---
		List<User> team2Users = new ArrayList<>();
		team2Users.add(user3);
		team2Users.add(user4);
		team2Users.add(user5);
		team2Users.add(user6);
		team2Users.add(user7);
		team2Users.add(user8);

		teamRepository.findByTeamName(team4.getTeamName()).setUsersOnTheTeam(team2Users);

		teamRepository.saveAndFlush(team3);
		teamRepository.saveAndFlush(team4);

		// projects
		Project project1 = new Project();
		project1.setName("Dropship Project");
		project1.setDescription("Plans to improve on the current dropship design. Expect completion date this winter.");
		project1.setActive(true);
		project1.setTeamOnProject(team3);
		projectRepository.saveAndFlush(project1);

		Project project2 = new Project();
		project2.setName("Cake Recipes");
		project2.setDescription("In order for the cake to not be a lie, we need those recipes for this project.");
		project2.setActive(true);
		project2.setTeamOnProject(team4);
		projectRepository.saveAndFlush(project2);

		Project project3 = new Project();
		project3.setName("Diamond Sword Project");
		project3.setDescription("To improve survival while farming, funds and research needed for the new diamond sword.");
		project3.setActive(true);
		project3.setTeamOnProject(team4);
		projectRepository.saveAndFlush(project3);

		Announcement announcement1 = new Announcement();
		announcement1.setAuthor(user1);
		announcement1.setCompanyMakingAnnouncement(company1);
		announcement1.setTitle("Chili Cookoff this Weekend");
		announcement1.setMessage("Hey Team. Just letting you know again that this weekend is our chili cookoff. Bring your best pots of chili for everyone and our judges to sample! Bring your family and expect an afternoon of fun!");
		announcement1.setTimePosted(Timestamp.valueOf(LocalDateTime.now()));

		Announcement announcement2 = new Announcement();
		announcement2.setAuthor(user1);
		announcement2.setCompanyMakingAnnouncement(company1);
		announcement2.setTitle("Plasma Grenade Training");
		announcement2.setMessage("Tomorrow morning will be mandatory plasma grenade training outside the cafeteria for the first work hour. We'll supply the body armor and grenades. We're out of coffee so feel free to bring your own or a pot to share.");
		announcement2.setTimePosted(Timestamp.valueOf(LocalDateTime.now()));

		Announcement announcement3 = new Announcement();
		announcement3.setAuthor(user1);
		announcement3.setCompanyMakingAnnouncement(company1);
		announcement3.setTitle("Missing: Red Stapler");
		announcement3.setMessage("I believe you have my stapler.");
		announcement3.setTimePosted(Timestamp.valueOf(LocalDateTime.now()));

		announcementRepository.saveAndFlush(announcement1);
		announcementRepository.saveAndFlush(announcement2);
		announcementRepository.saveAndFlush(announcement3);

		// Extra Seeder Data

		// --Company 3 ---
		Company company3 = new Company();
		company3.setCompanyName("765 Productions");
		company3.setCompanyDescription("Specializing in Advanced Media Creations");

		companyRepository.saveAndFlush(company3);

		// Company 3 Teams

		Team staffTeam = new Team();
		staffTeam.setTeamName("Staff Team");
		staffTeam.setTeamCompany(company3);
		staffTeam.setTeamDescription("Manages day to day business and supports the Production team");

		Team productionTeam = new Team();
		productionTeam.setTeamName("Production Team");
		productionTeam.setTeamCompany(company3);
		productionTeam.setTeamDescription("Produces Promotions, Auditions, Festivals and Live Concert events");

		Team idolTeam = new Team();
		idolTeam.setTeamName("Idol Team");
		idolTeam.setTeamCompany(company3);
		idolTeam.setTeamDescription("Performance members for jobs assigned by Production team");

		teamRepository.saveAndFlush(staffTeam);
		teamRepository.saveAndFlush(productionTeam);
		teamRepository.saveAndFlush(idolTeam);

		// --- President User ---
		// Credentials
		Credentials PresidentCred = new Credentials();
		PresidentCred.setUsername("President");
		PresidentCred.setPassword("Password");

		User President = new User();
		President.setCredentials(PresidentCred);

		// Profile
		Profile PresidentProfile = new Profile();
		PresidentProfile.setFirstName("Junichirou");
		PresidentProfile.setLastName("Takagi");
		PresidentProfile.setEmail("president@765pro.com");
		PresidentProfile.setPhone("898-65-99876");
		President.setProfile(PresidentProfile);
		President.setCompany(company3);
		President.setTeam(staffTeam);
		President.setStatus("JOINED");

		// --- Secretary 1 User ---
		// Credentials
		Credentials Secretary1Cred = new Credentials();
		Secretary1Cred.setUsername("piyopiyo");
		Secretary1Cred.setPassword("ilovesake765");

		User Secretary1 = new User();
		Secretary1.setCredentials(Secretary1Cred);

		// Profile
		Profile Secretary1Profile = new Profile();
		Secretary1Profile.setFirstName("Kotori");
		Secretary1Profile.setLastName("Otonashi");
		Secretary1Profile.setEmail("kotori@765Pro.com");
		Secretary1Profile.setPhone("184-53-7777");
		Secretary1.setProfile(Secretary1Profile);
		Secretary1.setCompany(company3);
		Secretary1.setAdmin(true);
		Secretary1.setTeam(staffTeam);
		Secretary1.setStatus("JOINED");
		// Active
		Secretary1.setActive(true);

		// ---Secretary 2 User ---
		// Credentials
		Credentials Secretary2Cred = new Credentials();
		Secretary2Cred.setUsername("misamisa");
		Secretary2Cred.setPassword("imakeoutfits765");

		User Secretary2 = new User();
		Secretary2.setCredentials(Secretary2Cred);

		// Profile
		Profile Secretary2Profile = new Profile();
		Secretary2Profile.setFirstName("Misaki");
		Secretary2Profile.setLastName("Aoba");
		Secretary2Profile.setEmail("misaki@765Pro.com");
		Secretary2Profile.setPhone("567-67-1239");
		Secretary2.setProfile(Secretary2Profile);
		Secretary2.setAdmin(false);
		Secretary2.setCompany(company3);
		Secretary2.setTeam(staffTeam);
		Secretary2.setStatus("JOINED");
		Secretary2.setActive(true);

		// --- Producer 1 user ---
		// Credentials
		Credentials Producer1Cred = new Credentials();
		Producer1Cred.setUsername("producer");
		Producer1Cred.setPassword("765producer");

		User Producer1 = new User();
		Producer1.setCredentials(Producer1Cred);

		// Profile
		Profile Producer1Profile = new Profile();
		Producer1Profile.setFirstName("Kenji");
		Producer1Profile.setLastName("Akabane");
		Producer1Profile.setEmail("producer@765Pro.com");
		Producer1Profile.setPhone("765-76-7651");
		Producer1.setProfile(Producer1Profile);
		Producer1.setCompany(company3);
		Producer1.setAdmin(true);
		Producer1.setTeam(productionTeam);
		Producer1.setStatus("JOINED");

		// --- Producer 2 user ---
		// Credentials
		Credentials Producer2Cred = new Credentials();
		Producer2Cred.setUsername("kenji");
		Producer2Cred.setPassword("kenji");

		User Producer2 = new User();
		Producer2.setCredentials(Producer2Cred);

		// Profile
		Profile Producer2Profile = new Profile();
		Producer2Profile.setFirstName("Yuutarou");
		Producer2Profile.setLastName("Takagi");
		Producer2Profile.setEmail("takagi@765Pro.com");
		Producer2Profile.setPhone("765-76-7652");
		Producer2.setProfile(Producer2Profile);
		Producer2.setCompany(company3);
		Producer2.setActive(false);
		Producer2.setAdmin(false);
		Producer2.setTeam(productionTeam);
		Producer2.setStatus("JOINED");

		// --- Idol 1 user ---
		// Credentials
		Credentials idol1Cred = new Credentials();
		idol1Cred.setUsername("harukaka");
		idol1Cred.setPassword("worldismine");

		User idol1 = new User();
		idol1.setCredentials(idol1Cred);

		// Profile
		Profile idol1Profile = new Profile();
		idol1Profile.setFirstName("Haruka");
		idol1Profile.setLastName("Amami");
		idol1Profile.setEmail("amami_h@765Pro.com");
		idol1Profile.setPhone("423-87-2356");
		idol1.setProfile(idol1Profile);
		idol1.setCompany(company3);
		idol1.setTeam(idolTeam);
		idol1.setStatus("JOINED");

		// --- Idol 2 user ---
		// Credentials
		Credentials idol2Cred = new Credentials();
		idol2Cred.setUsername("chihya");
		idol2Cred.setPassword("singingislife");

		User idol2 = new User();
		idol2.setCredentials(idol2Cred);

		// Profile
		Profile idol2Profile = new Profile();
		idol2Profile.setFirstName("Chihaya");
		idol2Profile.setLastName("Kisaragi");
		idol2Profile.setEmail("kisaragi_c@765Pro.com");
		idol2Profile.setPhone("678-23-1190");
		idol2.setProfile(idol2Profile);
		idol2.setCompany(company3);
		idol2.setTeam(idolTeam);
		idol2.setStatus("JOINED");

		// --- Idol 3 user ---
		// Credentials
		Credentials idol3Cred = new Credentials();
		idol3Cred.setUsername("mikinano");
		idol3Cred.setPassword("afuuafuu");

		User idol3 = new User();
		idol3.setCredentials(idol3Cred);

		// Profile
		Profile idol3Profile = new Profile();
		idol3Profile.setFirstName("Miki");
		idol3Profile.setLastName("Hoshii");
		idol3Profile.setEmail("hoshii_m@765Pro.com");
		idol3Profile.setPhone("961-43-0965");
		idol3.setProfile(idol3Profile);
		idol3.setCompany(company3);
		idol3.setTeam(idolTeam);
		idol3.setStatus("JOINED");

		// --- Idol 4 user ---
		// Credentials
		Credentials idol4Cred = new Credentials();
		idol4Cred.setUsername("yayoihifive");
		idol4Cred.setPassword("cookingisfun");

		User idol4 = new User();
		idol4.setCredentials(idol4Cred);

		// Profile
		Profile idol4Profile = new Profile();
		idol4Profile.setFirstName("Yayoi");
		idol4Profile.setLastName("Takatsuki");
		idol4Profile.setEmail("takatsuki_y@765Pro.com");
		idol4Profile.setPhone("762-14-9843");
		idol4.setProfile(idol4Profile);
		idol4.setCompany(company3);
		idol4.setTeam(idolTeam);
		idol4.setStatus("JOINED");

		// --- Idol 5 user ---
		// Credentials
		Credentials idol5Cred = new Credentials();
		idol5Cred.setUsername("moonhidesall");
		idol5Cred.setPassword("secrets961");

		User idol5 = new User();
		idol5.setCredentials(idol5Cred);

		// Profile
		Profile idol5Profile = new Profile();
		idol5Profile.setFirstName("Takane");
		idol5Profile.setLastName("Shijou");
		idol5Profile.setEmail("shijou_t@765Pro.com");
		idol5Profile.setPhone("961-39-2349");
		idol5.setProfile(idol5Profile);
		idol5.setCompany(company3);
		idol5.setTeam(idolTeam);
		idol5.setStatus("JOINED");

		userRepository.saveAndFlush(President);
		userRepository.saveAndFlush(Secretary1);
		userRepository.saveAndFlush(Secretary2);
		userRepository.saveAndFlush(Producer1);
		userRepository.saveAndFlush(Producer2);
		userRepository.saveAndFlush(idol1);
		userRepository.saveAndFlush(idol2);
		userRepository.saveAndFlush(idol3);
		userRepository.saveAndFlush(idol4);
		userRepository.saveAndFlush(idol5);

		// --Staff Team ---
		List<User> staffTeamUsers = new ArrayList<>();
		staffTeamUsers.add(President);
		staffTeamUsers.add(Secretary1);
		staffTeamUsers.add(Secretary2);

		Team staffTeamFromRepo = teamRepository.findByTeamName(staffTeam.getTeamName());
		staffTeamFromRepo.setUsersOnTheTeam(staffTeamUsers);
		teamRepository.saveAndFlush(staffTeamFromRepo);

		// --Production Team ---
		List<User> productionTeamUsers = new ArrayList<>();
		productionTeamUsers.add(Producer1);
		productionTeamUsers.add(Producer2);

		teamRepository.findByTeamName(productionTeam.getTeamName()).setUsersOnTheTeam(productionTeamUsers);

		// --Idol Team ---
		List<User> idolTeamUsers = new ArrayList<>();
		idolTeamUsers.add(idol1);
		idolTeamUsers.add(idol2);
		idolTeamUsers.add(idol3);
		idolTeamUsers.add(idol4);
		idolTeamUsers.add(idol5);

		teamRepository.findByTeamName(idolTeam.getTeamName()).setUsersOnTheTeam(idolTeamUsers);

		teamRepository.saveAndFlush(staffTeam);
		teamRepository.saveAndFlush(productionTeam);

		// projects
		Project office1Project = new Project();
		office1Project.setName("Office Renovation Planning");
		office1Project.setDescription(
				"Discuss plans for improving the office environment. Suggestions are a new air conditioner (old one is broken), a new refrigerator (old one is too small), and more seating for visitorsF");
		office1Project.setActive(true);
		office1Project.setTeamOnProject(staffTeam);
		projectRepository.saveAndFlush(office1Project);

		Project promo1Project = new Project();
		promo1Project.setName("Shopping Mall Promotion");
		promo1Project.setDescription(
				"Greet fans at the Atre Shopping Mall and pose for photos and shake fans' hands and sign autographs");
		promo1Project.setActive(true);
		promo1Project.setTeamOnProject(idolTeam);
		projectRepository.saveAndFlush(promo1Project);

		Project live1Project = new Project();
		live1Project.setName("Beach Live Concert");
		live1Project.setDescription(
				"A highly anticipated performance by Makuhari Beach next month on the 15th. Lots of fans are expected to attend, ~3,000");
		live1Project.setActive(true);
		live1Project.setTeamOnProject(idolTeam);
		projectRepository.saveAndFlush(live1Project);

		// Announcements
		Announcement staffAnnouncement1 = new Announcement();
		staffAnnouncement1.setAuthor(President);
		staffAnnouncement1.setCompanyMakingAnnouncement(company3);
		staffAnnouncement1.setTitle("Be Sure to Hydrate!");
		staffAnnouncement1.setMessage(
				"Due to the air conditioner currently being out of service, except it to be hot in the office! We'll have several fans running during the day, but please take care of yourselves and drink plenty of water and bring an extra water bottle when you come to work this week! Don't worry, we expect to get the air conditioner repaired or replaced on Saturday! Keep up the good work! ");
		staffAnnouncement1.setTimePosted(Timestamp.valueOf(LocalDateTime.now()));

		Announcement staffAnnouncement2 = new Announcement();
		staffAnnouncement2.setAuthor(President);
		staffAnnouncement2.setCompanyMakingAnnouncement(company3);
		staffAnnouncement2.setTitle("Beach Concert Next Month!");
		staffAnnouncement2.setMessage(
				"I hope everyone's training is going well for the beach concert next month! We expect a lot of people to show up, so put in that extra effort and reach out to your Producer, Otonashi-kun or Aoba-kun if you have anything you need to discuss!  ");
		staffAnnouncement2.setTimePosted(Timestamp.valueOf(LocalDateTime.now()));

		Announcement staffAnnouncement3 = new Announcement();
		staffAnnouncement3.setAuthor(Secretary1);
		staffAnnouncement3.setCompanyMakingAnnouncement(company3);
		staffAnnouncement3.setTitle("New Outfits Next Week!");
		staffAnnouncement3.setMessage(
				"We're expecting the our new outfits to be coming in by the middle of next week! I hope everyone is excited as I am!");
		staffAnnouncement3.setTimePosted(Timestamp.valueOf(LocalDateTime.now()));

		Announcement producerAnnouncement1 = new Announcement();
		producerAnnouncement1.setAuthor(Producer1);
		producerAnnouncement1.setCompanyMakingAnnouncement(company3);
		producerAnnouncement1.setTitle("Singing lessons tomorrow @ 14:00");
		producerAnnouncement1.setMessage(
				"Hey everyone. Just a reminder that singing lessons will be held at the usual studio across from the train station tomorrow afternoon at 14:00. If you have any trouble getting there on time, send me a text and I'll come pick you up!");
		producerAnnouncement1.setTimePosted(Timestamp.valueOf(LocalDateTime.now()));

		announcementRepository.saveAndFlush(staffAnnouncement1);
		announcementRepository.saveAndFlush(staffAnnouncement2);
		announcementRepository.saveAndFlush(staffAnnouncement3);
		announcementRepository.saveAndFlush(producerAnnouncement1);

	}

}