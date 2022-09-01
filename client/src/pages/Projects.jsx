import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import { getAllProjects, getAllProjectsByTeamId } from "../utils/requests";
import { getAdmin, getTeam } from "../reducers/rootReducer";

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    color: #1ba098;
    font-weight: 400;
    margin-top: 3rem;
  }
`;

const Projects = () => {
  const team = useSelector(getTeam);
  const isAdmin = useSelector(getAdmin);

  const [projects, updateProjects] = useState([]);

  const handleGetProjects = async () => {
    const DBprojects = team
      ? await getAllProjectsByTeamId(team.id)
      : await getAllProjects();
    if (DBprojects.length > 0) {
      let tempArry = [];
      for (let {
        name,
        timePosted,
        description,
        id,
        teamOnProject,
      } of DBprojects) {
        tempArry[tempArry.length] = {
          name,
          editedDaysAgo: Math.round(
            (new Date().getTime() - new Date(timePosted).getTime()) /
              (1000 * 60 * 60 * 24)
          ),
          description,
          id,
          teamID: teamOnProject.id,
          teamName: teamOnProject.teamName,
        };
      }
      updateProjects(tempArry);
    }
  };
  useEffect(() => {
    handleGetProjects();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <StyledProjects>
        <h1>{team.teamName} Projects</h1>
        {isAdmin ? <Project updatePage={handleGetProjects} /> : ""}
        {projects.map(
          ({ name, editedDaysAgo, description, id, teamID, teamName }, idx) => (
            <Project
              name={name}
              editedDaysAgo={editedDaysAgo}
              description={description}
              id={id}
              teamID={teamID}
              teamName={teamName}
              updatePage={handleGetProjects}
              isAdmin={isAdmin}
              key={idx}
            />
          )
        )}
      </StyledProjects>
    </Fragment>
  );
};

export default Projects;
