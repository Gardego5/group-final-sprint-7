import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TeamCard from "../components/TeamCard";
import { getAllUsersFromCompany } from "../utils/requests";
import { useSelector } from 'react-redux';
import { getCredentials } from './../reducers/rootReducer';

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

const defaultTeams = [
  {
    name: "Team1",
    projectCount: 4,
    members: [
      {
        name: "Chris P.",
      },
      {
        name: "Helena M.",
      },
      {
        name: "Chris P.",
      },
      {
        name: "Helena M.",
      },
    ],
  },
];

const Teams = () => {
  const [teams, updateTeams] = useState(defaultTeams);
  const credentials = useSelector(getCredentials);

  useEffect(() => {
    getAllUsersFromCompany(credentials, 1);
    console.log(getAllUsersFromCompany(credentials, 1));
  });
  const handleGetUsers = async () => {
  
    const allUsers =  await getAllUsersFromCompany(credentials, 1)
    console.log(allUsers);
  };
  return (
    <Fragment>
      <button onClick={handleGetUsers}>Data</button>
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
