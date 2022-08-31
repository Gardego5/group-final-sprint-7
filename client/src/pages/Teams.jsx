import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TeamCard from "../components/TeamCard";
import { getAllUsersFromCompany } from "../utils/requests";
import { useSelector } from "react-redux";
import { getCredentials, getCompany } from "./../reducers/rootReducer";

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
  const credentials = useSelector(getCredentials);
  const company = useSelector(getCompany);

  const handleGetUsers = async () => {
    const allUsers = await getAllUsersFromCompany(credentials, 1);
    updateAllNewUsers(allUsers);
    console.log(allUsers);
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    //map thru all the users.
    const teamIds = allNewUsers.map((user) => user.team.id);
    const teamNums = [...new Set(teamIds)];
    const numberOfTeams = teamNums.length;
    //make that the size of the list
    const filteredUsers = allNewUsers.filter(
      (user) => user.company.id == company.id
    );

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
        name: `${user.firstName} ${user.lastName[0]}`,
      })),
    }));

    updateTeams(solutionTeams);
  }, [allNewUsers]);

  return (
    <Fragment>
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
        </div>
      </StyledTeams>
    </Fragment>
  );
};

export default Teams;
