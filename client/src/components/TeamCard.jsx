import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { setTeam } from "../reducers/rootReducer";

import BasicButton from "./ModalComponents/BasicButton";
import ViewUser from "./Modals/ViewUser";

const StyledTeamCard = styled.div`
  width: 100%;
  min-height: 21rem;
  background: #0b2d45;
  color: white;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 0.25rem 0.25rem #0006;
  > * {
    padding: 0 1rem;
    margin: 0;
  }
  div.team-title {
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #deb992;
    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      min-height: 1em;
    }
    div.projects {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 0.5rem;
      p,
      button {
        margin: 0;
        font-size: 1rem;
        width: auto;
      }
    }
  }
  div.team-members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-bottom: 1.5rem;
    padding-inline: 2rem;
  }
`;

const TeamCard = ({ name, projectCount, teams, teamId }) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState("");

  const {team, members} = teams.filter(t => t.id === teamId)[0]

  return redirect ? (
    redirect
  ) : (
    <StyledTeamCard>
      <div className="team-title">
        <h3>{name}</h3>
        <div className="projects">
          <p># of Projects: {projectCount}</p>
          <BasicButton
            onClick={() => {
              setRedirect(<Redirect to="/Projects" />);
              dispatch(setTeam(team));
            }}
          >
            View Projects
          </BasicButton>
        </div>
      </div>
      <h3>Members</h3>
      <div className="team-members">
        {members?.map((user, idx) => (
          <ViewUser initialUser={user} abbreviate={true} key={idx} />
        ))}
      </div>
    </StyledTeamCard>
  );
};

export default TeamCard;
