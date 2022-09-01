import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import { getAllProjects } from "../utils/requests";
import { useSelector } from "react-redux";
import { getAdmin } from "../reducers/rootReducer";

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
  const [projects, updateProjects] = useState([]);
  const isAdmin = useSelector(getAdmin);

  const handleGetProjects = async () => {
    const DBprojects = await getAllProjects();
    if (DBprojects.length > 0) {
      let tempArry = [];
      for (let i of DBprojects) {
        tempArry[tempArry.length] = {
          name: i.name,
          editedDaysAgo: Math.round(
            (new Date().getTime() - new Date(i.timePosted).getTime()) /
              (1000 * 60 * 60 * 24)
          ),
          desc: i.description,
          id: i.id,
          teamID: i.teamOnProject.id,
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
        <h1>Projects</h1>
        {isAdmin ? <Project updatePage={handleGetProjects} /> : ""}
        {projects.map(({ name, editedDaysAgo, desc, id, teamID }, idx) => (
          <Project
            ID={id}
            name={name}
            editedDaysAgo={editedDaysAgo}
            desc={desc}
            key={idx}
            updatePage={handleGetProjects}
            teamID={teamID}
            isAdmin={isAdmin}
          />
        ))}
      </StyledProjects>
    </Fragment>
  );
};

export default Projects;
