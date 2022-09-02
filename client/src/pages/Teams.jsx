import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TeamCard from "../components/TeamCard";
import {
  getAllUsersFromCompany,
  getAllTeamsAndProjectCountByCompany,
} from "../utils/requests";
import { useSelector } from "react-redux";
import { getCompany } from "./../reducers/rootReducer";
import CreateTeam from "../components/Modals/CreateTeam";

const StyledTeams = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div#teams {
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
  const [allUsers, updateAllNewUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [teamCount, setNewTeams] = useState(0);
  const company = useSelector(getCompany);

  const [myNewUsersData, setMyNewData] = useState();
  const [myNewTeams, setMyNewTeams] = useState(defaultTeams);

  const [teams, updateTeams] = useState(defaultTeams);

  const handleGetUsers = async () => {
    const allUsers = await getAllUsersFromCompany(company.id);
    updateAllNewUsers(allUsers);
  };

  const getNewTeams = () =>
    setTimeout(function () {
      setNewTeams(teamCount + 1);
      window.location.reload();
    }, 300);

  const getAllUsersAgain = async () => {
    const newUsersAndProjects = await getAllTeamsAndProjectCountByCompany(
      company.id
    );
    setMyNewData(newUsersAndProjects);
  };

  useEffect(() => {
    const filteredUsers = allUsers.filter((user) => user.team);
    setMembers(filteredUsers);

    const solutionTeams = myNewUsersData?.teams.map((list, index) => ({
      name: list.teamName,
      projectCount: list.numberOfProjects,
      members: list.members,
      id: list.id
    }));
    setMyNewTeams(solutionTeams);
  }, [myNewUsersData, teamCount]);

  useEffect(() => {
    handleGetUsers();
    getAllUsersAgain();
  }, [teamCount]);

  useEffect(() => {
    //map thru all the users.
    const filteredUsers = allUsers.filter((user) => user.team);
    setMembers(filteredUsers);

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

    const solutionTeams = reducedTeams.map((list, index) => ({
      team: list[0].team,
      members: list,
      id: list[0].team.id,
    }));
    
    updateTeams(solutionTeams);
  }, [allUsers, teamCount]);

  return (
    <>
      <NavBar />
      <StyledTeams>
        <h1>Teams</h1>
        <div id="teams">
          {myNewTeams
            ?.map(({ name, projectCount, members, id }, idx) => (
              <TeamCard
                name={name}
                projectCount={projectCount}
                members={members}
                key={idx}
                teams={teams}
                teamId={id}
              />
            ))}
          <CreateTeam members={members} getNewTeams={getNewTeams} />
        </div>
      </StyledTeams>
    </>
  );
};

export default Teams;
