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
    display: flex;
    flex-direction: column;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #deb992;
    padding-bottom: 75px;
  }
  & div.team-title h2,
  & div.team-title p {
    margin: 0;
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

const TeamCard = ({name, projectCount, members}) => {
  return (
    <StyledTeamCard>
      <div className="team-title">
        <h3>{name}</h3>
        <p># of Projects: {projectCount}</p> 
      </div>
      <h3>Members</h3>
      <div className="team-members">
        {members.map(({name}, idx) => <button key={idx}>{name}</button>)}
      </div>
    </StyledTeamCard>
  );
};

export default TeamCard;
