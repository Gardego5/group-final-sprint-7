import styled from "styled-components";
import BasicButton from "./ModalComponents/BasicButton";

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

const Project = ({ name, editedDaysAgo, desc, onEdit }) => {
  return name !== undefined &&
    editedDaysAgo !== undefined &&
    desc !== undefined ? (
    <StyledProject>
    <BasicButton className="edit-button" bg="#deb992" c="black">Edit</BasicButton>
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
      <BasicButton className="edit-button" onClick={onEdit}>New</BasicButton>
    </StyledProject>
  );
};

export default Project;
