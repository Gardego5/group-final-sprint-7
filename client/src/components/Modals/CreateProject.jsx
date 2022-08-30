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


const CreateProject = ({teamId, }) => {
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
      <Modal isOpen={modalOpen} toggle={toggle}>
        {" "}
        <ModalHeader>
          {" "}
          Create Project
          <Button color="danger" onClick={() => setModalOpen(false)}>X</Button>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              projectName: "",
              description: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="projectName"></Label>
                <Field
                  name="projectName"
                  placeholder="Project Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Field
                  name="description"
                  as="textarea"
                  rows="5"
                  className="form-control"
                />
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

export default CreateProject;
