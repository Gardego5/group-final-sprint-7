import styled from "styled-components";

const SelectCompany = () => {

    const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    const Title = styled.h1`
    color: blue;
    margin-top: 1em;
    text-align: center;
    `;

    const CompanySelector = styled.select`
        border-radius: 4px;
    `;

    const CompanyOption = styled.option`
        
    `;

    return(
        <MainDiv>
            <Title>Select Company</Title>
            <CompanySelector>
                <CompanyOption>company1</CompanyOption>
                <CompanyOption>company2</CompanyOption>
                <CompanyOption>company3</CompanyOption>
            </CompanySelector>
        </MainDiv>
    );
};

export default SelectCompany;