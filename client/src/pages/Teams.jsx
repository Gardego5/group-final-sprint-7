import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TeamCard from "../components/TeamCard";
import { getAllUsersFromCompany } from "../utils/requests";
import { useSelector } from "react-redux";
import { getCredentials, getCompany } from "./../reducers/rootReducer";
import CreateTeam from "../components/Modals/CreateTeam";

const StyledTeams = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & div#teams {
    width: 80%;
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    margin-bottom: 4rem;
  }
`;
const Teams = () => {
  const defaultTeams = [
    {
      name: "Team1",
      projectCount: 4,
      members: [
        {
          name: "Chris P.",
        },
      ],
    },
  ];
  const [teams, updateTeams] = useState(defaultTeams);
  const [allNewUsers, updateAllNewUsers] = useState([]);
  const [members, setMembers] = useState([])
  const credentials = useSelector(getCredentials);
  const company = useSelector(getCompany);

  const handleGetUsers = async () => {
    const allUsers = await getAllUsersFromCompany(company.id);
    updateAllNewUsers(allUsers);
    console.log(allUsers);
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    //map thru all the users.
    const filteredUsers = allNewUsers.filter(
      (user) => user.team
    );
    setMembers(filteredUsers)
    let reducedTeams = filteredUsers.reduce((fullList, currentUser) => {
      let index = fullList.length - 1;
      if (
        fullList.length &&
        fullList[index][0].team.id === currentUser.team.id
      ) {
        fullList[index].push(currentUser);
      } else {
        fullList.push([currentUser]);
      }
      return fullList;
    }, []);

    const solutionTeams = reducedTeams.map((list) => ({
      name: list[0].team.teamName,
      projectCount: 99,
      members: list.map((user) => ({
        name: `${user.profile.firstName} ${user.profile.lastName[0]}`,
      })),
    }));

    updateTeams(solutionTeams);
  }, [allNewUsers]);

  return (
    <>
      <NavBar />
      <StyledTeams>
        <h1>Teams</h1>
        <div id="teams">
          {teams.map(({ name, projectCount, members }, idx) => (
            <TeamCard
              name={name}
              projectCount={projectCount}
              members={members}
              key={idx}
            />
          ))}
          <CreateTeam members={members}/>
    
        </div>
      </StyledTeams>
    </>
  );
};

export default Teams;
