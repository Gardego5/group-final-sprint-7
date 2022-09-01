import styled from "styled-components";

const StyledTeamCard = styled.div`
  width: 100%;
  height: 21rem;
  background: #0b2d45;
  color: white;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 0.25rem 0.25rem #0006;
  margin: auto;
  & > * {
    padding: 0 1rem;
    margin: 0;
  }
  & div.team-title {
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #deb992;
  }

  & div.team-title h3,
  & div.team-title p {
    margin: none;
    padding: none;
  }
  & div.team-title p {
    flex: none;
    padding-bottom: none;
  }

  & div.team-title h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  & div.team-members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-bottom: 1.5rem;
    padding-inline: 2rem;
  }
  & div.team-members button {
    color: white;
    border-radius: 0.5rem;
    border: none;
    background: #1ba098;
    padding: 0.5rem;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.25rem #0006;
  }
  & div.team-members button:active {
    transform: translateY(0.25rem);
    box-shadow: none;
  }
`;

const TeamCard = ({ name, projectCount, members }) => {
  return (
    <StyledTeamCard>
      <div className="team-title">
        <h3>{name}</h3>
        <p># of Projects: {projectCount}</p>
      </div>
      <h3>Members</h3>
      <div className="team-members">
        {members?.map(({ firstName, lastName }, idx) => (
          <button key={idx}>{`${firstName} ${lastName}`}</button>
        ))}
      </div>
    </StyledTeamCard>
  );
};

export default TeamCard;
