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

//Form for adding a announcement to the announcement page
const CreateTeamN = ({teamId}) => {
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
      <Button outline onClick={() => setModalOpen(true)}>
        {" "}
        {/*onClick the [modalOpen] is set to [true] */}
        Create Team
      </Button>
      <Modal isOpen={modalOpen} toggle={toggle}>
        {" "}
        {/* if the [modalOpen] is [true] then the <Modal> is open*/}
        <ModalHeader>
          {" "}
          Create Team
          <Button color="danger" onClick={() => setModalOpen(false)}>X</Button>
          {/*will close the modal if you click the X toggle on the top right*/}
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              teamName: "",
              description: "",
              members: [],
            }}
            onSubmit={handleSubmit}
            // validate={validateForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="teamName"></Label>
                <Field
                  name="teamName"
                  placeholder="Team Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description"></Label>
                <Field
                  name="description"
                  placeholder="Description"
                  as="textarea"
                  rows="5"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="members">Members</Label>
                <Field id="members" name="members" as="select" className="form-control">
                  {/* {members.map((member) => (
                    <option key={member} value={member}>
                      {member}
                    </option>
                  ))} */}
                </Field>
              </FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateTeamN;