import styled from "styled-components";
import BasicButton from "./ModalComponents/BasicButton";
import CreateProject from "./Modals/CreateProject";
import ViewProject from "./Modals/ViewProject";

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
    justify-content: space-between;
    margin-bottom: 1rem;
    * {
      margin: 0;
    }
  }
  padding-block: 2rem;
`;

const Project = ({
  updatePage,
  name,
  editedDaysAgo,
  desc,
  onEdit,
  ID,
  teamID,
  isAdmin,
}) => {
  return name !== undefined &&
    editedDaysAgo !== undefined &&
    desc !== undefined ? (
    <StyledProject>
      {isAdmin ? (
        <CreateProject
          team={teamID}
          updatePage={updatePage}
          name={name}
          desc={desc}
          projectID={ID}
          buttonText="Edit"
        />
      ) : (
        <ViewProject
          team={teamID}
          name={name}
          desc={desc}
          editedDaysAgo={editedDaysAgo}
          projectID={ID}
        />
      )}
      <div className="project-row">
        <div className="project-title">
          <h2>{name}</h2>
          <p className="project-timestamp">
            Last edited {editedDaysAgo} days ago
          </p>
        </div>
        <p className="project-desc">{desc}</p>
      </div>
    </StyledProject>
  ) : (
    <StyledProject>
      <CreateProject
        updatePage={updatePage}
        buttonText="New"
      />
    </StyledProject>
  );
};

export default Project;
