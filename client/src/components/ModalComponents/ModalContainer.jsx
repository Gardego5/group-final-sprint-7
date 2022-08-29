import styled from "styled-components";

const StyledModal = styled.div`
    width: ${({ w }) => w ? w : "500px"};
    height: ${({ h }) => h ? h : "500px"};
    background: rgb(11, 45, 69);
`

const ModalContainer = () => {
    return ( 
        <StyledModal>
            
        </StyledModal>
     );
}

export default ModalContainer;