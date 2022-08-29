import { styled } from 'styled-components';

const StyledClose = styled.button`
    width: ${({ w }) => w ? w : "50px"};
    height: ${({ h }) => h ? h : "50px"};
`

const CloseButton = () => {
    return ( 
        <StyledClose>
            X
        </StyledClose>
     ); 
 
export default CloseButton;