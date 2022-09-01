import { Fragment, useState } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import CreateProject from "../components/Modals/CreateProject";

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    color: #1ba098;
    font-weight: 400;
  }
`;

const defaultProjects = [
  {
    name: "Project 1",
    editedDaysAgo: 2,
    desc: "Lorem ipsum this project is about stuff",
  },
  {
    name: "Project 2",
    editedDaysAgo: 1,
    desc: "Lorem ipsum this project is about stuff",
  },
];

const Projects = () => {
  const [projects, updateProjects] = useState(defaultProjects);

  const addNewProject = (event) => {};

  return (
    <Fragment>
      <NavBar />
      <StyledProjects>
        <h1>Projects</h1>
        <CreateProject buttonColor="#1BA098" buttonText="Create Project"/>
        <Project/>
        {projects.map(({ name, editedDaysAgo, desc }, idx) => (
          <Project
            name={name}
            editedDaysAgo={editedDaysAgo}
            desc={desc}
            key={idx}
          />
        ))}
      </StyledProjects>
    </Fragment>
  );
};

export default Projects;
