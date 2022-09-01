import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TeamCard from "../components/TeamCard";
import { getAllUsersFromCompany } from "../utils/requests";
import { useSelector } from "react-redux";
import { getCompany } from "./../reducers/rootReducer";
import CreateTeam from "../components/Modals/CreateTeam";
import { getAllProjects } from "./../utils/requests";

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
  const [teams, updateTeams] = useState(defaultTeams);
  const [allNewUsers, updateAllNewUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newTeams, setNewTeams] = useState(0)
  const company = useSelector(getCompany);

  const handleGetUsers = async () => {
    const allUsers = await getAllUsersFromCompany(company.id);
    updateAllNewUsers(allUsers);
    const indProjects = await getAllProjects();
    setProjects(indProjects);
  };

  const getNewTeams = () => setTimeout(function(){
    setNewTeams(newTeams + 1)
}, 2000);

  useEffect(() => {
    handleGetUsers();
  }, [newTeams]);

  useEffect(() => {
    //map thru all the users.
    const filteredUsers = allNewUsers.filter((user) => user.team);
    setMembers(filteredUsers);

    const reduceProjects = projects.reduce((fullList, currentProject) => {
      let index = fullList.length - 1;
      if (
        fullList.length &&
        fullList[index][0].teamOnProject.id === currentProject.teamOnProject.id
      ) {
        fullList[index].push(currentProject);
      } else {
        fullList.push([currentProject]);
      }
      return fullList;
    }, []);

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
      name: list[0].team.teamName,
      projectCount:
        reduceProjects[index]?.length > 0 ? reduceProjects[index]?.length : 0,
      members: list,
      team: list[0].team,
    }));

    updateTeams(solutionTeams);
  }, [allNewUsers, projects]);

  return (
    <>
      <NavBar />
      <StyledTeams>
        <h1>Teams</h1>
        <div id="teams">
          {teams.map(({ name, projectCount, members, team }, idx) => (
            <TeamCard
              name={name}
              projectCount={projectCount}
              members={members}
              key={idx}
              team={team}
            />
          ))}
          <CreateTeam members={members} getNewTeams={getNewTeams}/>
        </div>
      </StyledTeams>
    </>
  );
};

export default Teams;
