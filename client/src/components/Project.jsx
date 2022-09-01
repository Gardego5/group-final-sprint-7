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
  padding-block: 2rem;
`;

const Project = ({ updatePage, name, editedDaysAgo, desc, onEdit, ID, teamID }) => {
  return name !== undefined &&
    editedDaysAgo !== undefined &&
    desc !== undefined ? (
    <StyledProject>
      <CreateProject team={teamID} updatePage={updatePage} name={name} desc={desc} projectID={ID} buttonText="Edit"/>
      <div className="project-row">
        <div className="project-title">
          <h2>{name}</h2>
          <p>Last edited {editedDaysAgo} days ago</p>
        </div>
        <p className="project-desc">{desc}</p>
      </div>
    </StyledProject>
  ) : (
    <StyledProject>
      <CreateProject updatePage={updatePage} buttonColor="#1BA098" buttonText="New"/>
    </StyledProject>
  );
};

export default Project;
