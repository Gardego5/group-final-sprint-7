import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import CreateProject from "../components/Modals/CreateProject";
import { getAllProjects } from "../utils/requests";

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    color: #1ba098;
    font-weight: 400;
  }
`;

const Projects = () => {
  const [projects, updateProjects] = useState([]);

  const handleGetProjects = async () => {
    const DBprojects = await getAllProjects();
    console.log("Reloading projects")
    if (DBprojects.length > 0) {
      let tempArry = []
      for (let i of DBprojects) {
        tempArry[tempArry.length] = {
          name: i.name,
          editedDaysAgo: 0,
          desc: i.description,
          id: i.id
        }
      }
      updateProjects(tempArry)
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
        <CreateProject updatePage={handleGetProjects} buttonColor="#1BA098" buttonText="Create Project"/>
        <Project/>
        {projects.map(({ name, editedDaysAgo, desc, id }, idx) => (
          <Project
            ID={id}
            name={name}
            editedDaysAgo={editedDaysAgo}
            desc={desc}
            key={idx}
            updatePage={handleGetProjects}
          />
        ))}
      </StyledProjects>
    </Fragment>
  );
};

export default Projects;
