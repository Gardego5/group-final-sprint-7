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

const CreateProject = ({ teamId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const toggle = () => setModalOpen(!modalOpen);
  const handleSubmit = (values) => {
    const project = {
      teamId: parseInt(teamId),
      projectName: values.projectName,
      description: values.description,
    };
  };
  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        {" "}
        Create Project
      </Button>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        {" "}
        <StyledModalHeader>
          {" "}
          Create Project
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
          <Formik
            initialValues={{
              projectName: "",
              description: "",
            }}
            onSubmit={handleSubmit}
          >
            <StyledForm>
              <FormGroup>
                <Label htmlFor="projectName"></Label>
                <StyledField
                  name="projectName"
                  placeholder="Project Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description"></Label>
                <StyledField
                  name="description"
                  as="textarea"
                  rows="5"
                  className="form-control"
                  placeholder="Description"
                />
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

export default CreateProject;
