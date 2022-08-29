import CloseButton from "../ModalComponents/CloseButton";
import BasicButton from "../ModalComponents/BasicButton";
import ModalContainer from "../ModalComponents/ModalContainer";
import styled from "styled-components";

const StyledInput = styled.input`
  background: rgba(83, 79, 79, 0.9);
  border-radius: 5px;
  margin: 20px;
`;

const CreateTeam = () => {
  const [form, updateForm] = useState(null);
  const [userData, setUserData] = useState([]);

  const setInputData = (event) => {
    updateForm(event.target.value);
  };

  const getUserData = async (e) => {
    e.preventDefault();
    setUserData(await inspectUser(form));
  };

  return (
    <ModalContainer>
      <CloseButton />
      <form onSubmit={getUserData}>
        <StyledInput type="text" onChange={setInputData} placeholder="Team Name" />
        <BasicButton type="submit" bg="rgb(27, 160, 152)" >
          Submit
        </BasicButton>
      </form>
    </ModalContainer>
  );
}; 

export default CreateTeam;