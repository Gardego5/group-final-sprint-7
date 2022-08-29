import { Fragment, useState } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import TeamCard from "../components/TeamCard";

const StyledTeams = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & div#teams {
    display: grid;
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
