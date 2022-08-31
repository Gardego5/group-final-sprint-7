import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormGroup, Label } from "reactstrap";
import { Formik } from "formik";
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledButton,
  StyledField,
  StyledForm,
  StyledCloseButton,
} from "./Modals.module";
import styled from "styled-components";
import { getCompany } from "./../../reducers/rootReducer";

const NewButton = styled(Button)`
  z-index: -1;
  margin: auto;
  width: 19rem;
  height: 21rem;
  border: none;
  &:hover {
    background: none;
  }
  &:active {
    background: none;
    border: none;
  }
  &:focus {
    background: none;
    border: none;
  }
`;

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

const CreateTeam = ({ members }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pickedMembers, setPickedMembers] = useState([]);
  const [newMembers, setNewMembers] = useState();
  const company = useSelector(getCompany);

  const dispatch = useDispatch();
  const toggle = () => setModalOpen(!modalOpen);
  const handleSubmit = (values) => {
    // pass the [values] to extract everything submited to the form
    const postTeamData = {
      teamName: values.teamName,
      teamDescription: values.description,
      companyID: company.id,
      members: pickedMembers,
    };
  };
  useEffect(() => {
    setNewMembers([...members]);
  }, [members]);
  console.log("PickedMembers: " + JSON.stringify(pickedMembers));

  const removeMember = (member) => {
    const tempList = pickedMembers.filter((user) => user != member);
    setPickedMembers(tempList);
    setNewMembers([...newMembers, member]);
  };

  const setSelectChange = (e) => {
    const option = e.target.value;
    setPickedMembers([
      ...pickedMembers,
      newMembers.filter((member) => member.username === option)[0],
    ]);
    setNewMembers(newMembers.filter((member) => member.username !== option));
  };

  return (
    <>
      <NewButton outline onClick={() => setModalOpen(true)}>
        <StyledAddTeam>
          <StyledPlus>+</StyledPlus>
          <StyledText>New Team</StyledText>
        </StyledAddTeam>
      </NewButton>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        <StyledModalHeader>
          Create Team
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
          <Formik
            initialValues={{
              teamName: "",
              description: "",
            }}
            onSubmit={handleSubmit}
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
                <Label
                  htmlFor="members"
                  style={{ color: "rgb(222, 185, 146)", marginTop: "3rem" }}
                >
                  Members
                </Label>
                <select
                  id="members"
                  name="members"
                  onChange={setSelectChange}
                  className="form-control"
                >
                  <option>Pick A Member</option>
                  {newMembers?.map((user) => (
                    <option
                      key={user.username}
                      value={user.username}
                      // onClick={console.log("Hello")}
                    >
                      {user.profile.firstName}
                    </option>
                  ))}
                </select>
              </FormGroup>
              {pickedMembers
                ? pickedMembers.map((member, idx) => (
                    <div key={idx}>
                      <div>
                        {member.profile.firstName}
                        <button
                          type="button"
                          onClick={() => {
                            removeMember(member);
                          }}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))
                : ""}
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
