import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Field, Form } from "formik";
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledButton,
  StyledField,
  StyledForm,
  StyledCloseButton,
} from "./Modals.module";
import styled from 'styled-components';

const NewButton = styled(Button)`
  width: 19rem;
  height: 21rem;
  border: none;
  &:hover {
    background: none;
  }
  &:active{
    background: none;
    border: none;
  }
  &:focus {
    background: none;
    border: none;
  }
`

const StyledAddTeam = styled.div`
  position: relative;
  width: 18rem;
  height: 20rem;
  border: 3px solid rgb(209, 175, 139);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledPlus = styled.div`
  color: rgb(222, 185, 146);
  position: absolute;
  font-size: 20rem;
  bottom: -10%;
`;

const StyledText = styled.div`
  font-size: 2rem;
  color: rgb(222, 185, 146);
  position: absolute;
  bottom: 10%;
`;
//Form for adding a announcement to the announcement page
const CreateTeam = ({teamId}) => {
  const [modalOpen, setModalOpen] = useState(false); // modalOpen state is set to [false]

  const dispatch = useDispatch(); //conventional way to use useDispatch is to create a new const called dispatch to make it more readable
  const toggle = () => setModalOpen(!modalOpen);
  const handleSubmit = (values) => {
    // pass the [values] to extract everything submited to the form
    const team = {
      teamId: parseInt(teamId),
      teamName: values.teamName,
      description: values.description,
      members: values.members, 
      // date: new Date(Date.now()).toISOString(), //create a new [Date] object and set it to the time the form was submitted
    };

    // dispatch(postTeam(team)); // dispatch the action to update the state of the component 
    // setModalOpen(false); //when submitted the modal closes as the [modalOpen] is set to [false] by the [useState]/[setModalOpen]
  };
  return (
    <>
      <NewButton outline onClick={() => setModalOpen(true)}>
        {" "}
        {/*onClick the [modalOpen] is set to [true] */}
          <StyledAddTeam>
            <StyledPlus>+</StyledPlus>
            <StyledText>New Team</StyledText>
          </StyledAddTeam>
      </NewButton>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        {" "}
        {/* if the [modalOpen] is [true] then the <Modal> is open*/}
        <StyledModalHeader>
          {" "}
          Create Team
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>X</StyledCloseButton>
          {/*will close the modal if you click the X toggle on the top right*/}
        </StyledModalHeader>
        <StyledModalBody>
          <Formik
            initialValues={{
              teamName: "",
              description: "",
              members: [],
            }}
            onSubmit={handleSubmit}
            // validate={validateForm}
          >
            <StyledForm>
              <FormGroup>
                <Label htmlFor="teamName"></Label>
                <StyledField
                  name="teamName"
                  placeholder="Team Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description"></Label>
                <StyledField
                  name="description"
                  placeholder="Description"
                  as="textarea"
                  rows="5"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="members" style={{color: "rgb(222, 185, 146)", marginTop: "3rem"}}>Members</Label>
                <StyledField id="members" name="members" as="select" className="form-control">
                  {/* {members.map((member) => (
                    <option key={member} value={member}>
                      {member}
                    </option>
                  ))} */}
                </StyledField>
              </FormGroup>
              <StyledButton type="submit" color="primary">
                Submit
              </StyledButton>
            </StyledForm>
          </Formik>
        </StyledModalBody>
      </StyledModal>
    </>
  );
};

export default CreateTeam;