import styled from "styled-components";
import BasicButton from "./ModalComponents/BasicButton";
import CreateProject from "./Modals/CreateProject";

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.0625rem solid #deb992;
  width: 70%;
  justify-content: space-between;
  flex-direction: row-reverse;
  & div.project-title {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  padding-bottom: 2rem;
`;

const Project = ({ updatePage, name, editedDaysAgo, desc, onEdit, ID }) => {
  return name !== undefined &&
    editedDaysAgo !== undefined &&
    desc !== undefined ? (
    <StyledProject>
      <CreateProject updatePage={updatePage} projNameProp={name} projectDescription={desc} projectID={ID} buttonText="Edit"/>
      <div className="project-row">
        <div className="project-title">
          <h2>{name}</h2>
          <p>Last edited {editedDaysAgo} days ago</p>
        </div>
        <p className="project-desc">{desc}</p>
      </div>
    </StyledProject>
  ) : (
    <StyledProject/>
  );
};

export default Project;
