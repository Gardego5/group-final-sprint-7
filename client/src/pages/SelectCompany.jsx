import styled from "styled-components";

const SelectCompany = () => {
  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 300px;
  `;

  const Title = styled.h1`
    color: blue;
    margin-top: 1em;
    text-align: center;
    font-size: 50px;
  `;

  const CompanySelector = styled.select`
    border-radius: 4px;
    height: 40px;
    width: 200px;
    font-size: 20px;
    text-align: center;
  `;

  const CompanyOption = styled.option``;

  return (
    <MainDiv>
      <Title>Select Company</Title>
      <CompanySelector>
        <CompanyOption>Pick an Option</CompanyOption>
        <CompanyOption>FedEx</CompanyOption>
        <CompanyOption>Cook Systems</CompanyOption>
        <CompanyOption>Google</CompanyOption>
      </CompanySelector>
    </MainDiv>
  );
};

export default SelectCompany;
