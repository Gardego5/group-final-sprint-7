
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${({ w }) => w ? w : "80px"};
    height: ${({ h }) => h ? h : "30px"};
    background: ${({ bg }) => bg ? bg : "rgb(27, 160, 152)"};
`

const BasicButton = () => {
    return ( 
        <StyledButton>

        </StyledButton>
     );
}

export default BasicButton;