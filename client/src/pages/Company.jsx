// import { Fragment } from "react";
import styled from "styled-components";

const StyledCompany = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

// const StyledTitle = styled.h2`
//   font-size: 24px; ;
// `;

const Company = () => {
  return (
    <StyledCompany>
      <h1>Select Company</h1>
    </StyledCompany>
  );
};

export default Company;
