package com.example.Sprint7Final.mappers;

import com.example.Sprint7Final.dtos.CompanyDto;
import com.example.Sprint7Final.dtos.TeamDto;
import com.example.Sprint7Final.dtos.UserResponseDto;
import com.example.Sprint7Final.entities.Company;
import com.example.Sprint7Final.entities.Credentials;
import com.example.Sprint7Final.entities.Profile;
import com.example.Sprint7Final.entities.Team;
import com.example.Sprint7Final.entities.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-29T20:32:44-0700",
    comments = "version: 1.4.1.Final, compiler: Eclipse JDT (IDE) 1.4.100.v20220318-0906, environment: Java 17.0.4.1 (N/A)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserResponseDto entityToDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setUsername( userCredentialsUsername( user ) );
        userResponseDto.setFirstName( userProfileFirstName( user ) );
        userResponseDto.setLastName( userProfileLastName( user ) );
        userResponseDto.setEmail( userProfileEmail( user ) );
        userResponseDto.setPhone( userProfilePhone( user ) );
        userResponseDto.setActive( user.isActive() );
        userResponseDto.setAdmin( user.isAdmin() );
        userResponseDto.setCompany( companyToCompanyDto( user.getCompany() ) );
        userResponseDto.setStatus( user.getStatus() );
        userResponseDto.setTeam( teamToTeamDto( user.getTeam() ) );

        return userResponseDto;
    }

    @Override
    public List<UserResponseDto> entitiesToDtos(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( users.size() );
        for ( User user : users ) {
            list.add( entityToDto( user ) );
        }

        return list;
    }

    private String userCredentialsUsername(User user) {
        if ( user == null ) {
            return null;
        }
        Credentials credentials = user.getCredentials();
        if ( credentials == null ) {
            return null;
        }
        String username = credentials.getUsername();
        if ( username == null ) {
            return null;
        }
        return username;
    }

    private String userProfileFirstName(User user) {
        if ( user == null ) {
            return null;
        }
        Profile profile = user.getProfile();
        if ( profile == null ) {
            return null;
        }
        String firstName = profile.getFirstName();
        if ( firstName == null ) {
            return null;
        }
        return firstName;
    }

    private String userProfileLastName(User user) {
        if ( user == null ) {
            return null;
        }
        Profile profile = user.getProfile();
        if ( profile == null ) {
            return null;
        }
        String lastName = profile.getLastName();
        if ( lastName == null ) {
            return null;
        }
        return lastName;
    }

    private String userProfileEmail(User user) {
        if ( user == null ) {
            return null;
        }
        Profile profile = user.getProfile();
        if ( profile == null ) {
            return null;
        }
        String email = profile.getEmail();
        if ( email == null ) {
            return null;
        }
        return email;
    }

    private String userProfilePhone(User user) {
        if ( user == null ) {
            return null;
        }
        Profile profile = user.getProfile();
        if ( profile == null ) {
            return null;
        }
        String phone = profile.getPhone();
        if ( phone == null ) {
            return null;
        }
        return phone;
    }

    protected CompanyDto companyToCompanyDto(Company company) {
        if ( company == null ) {
            return null;
        }

        CompanyDto companyDto = new CompanyDto();

        companyDto.setDescription( company.getDescription() );
        companyDto.setId( company.getId() );
        companyDto.setName( company.getName() );

        return companyDto;
    }

    protected TeamDto teamToTeamDto(Team team) {
        if ( team == null ) {
            return null;
        }

        TeamDto teamDto = new TeamDto();

        teamDto.setId( team.getId() );
        teamDto.setTeamDescription( team.getTeamDescription() );
        teamDto.setTeamName( team.getTeamName() );

        return teamDto;
    }
}
