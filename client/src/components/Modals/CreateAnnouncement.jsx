import { useState } from "react";
import { useDispatch } from "react-redux";
import BasicButton from "../ModalComponents/BasicButton";
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

const CreateAnnouncement = (props) => {
  // useState hooks
  const [modalOpen, setModalOpen] = useState(false);
  const [announcement, setAnnouncement] = useState({});
  // helper functions
  const toggle = () => setModalOpen(!modalOpen);
  const handleSubmit = (values) => {
    // use value of input to set announcement body
    // API call to save new post to database
    const announcement = {
      firstName: props.firstName,
      lastName: props.lastName,
      title: values.title,
      postText: values.postText,
      date: new Date(Date.now()).toDateString(), //create a new [Date] object and set it to the time the form was submitted
    };
    setAnnouncement(announcement);
    // const dispatch = useDispatch();
    // dispatch(postAnnouncement(announcement)); // dispatch the action to update the state of the component
    // setModalOpen(false); //when submitted the modal closes as the [modalOpen] is set to [false] by the [useState]/[setModalOpen]
  };
  return (
    <>
      <BasicButton outline onClick={() => setModalOpen(true)}>
        New
      </BasicButton>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        <StyledModalHeader>
          Add Announcement
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
          <Formik
            initialValues={{
              postText: "",
            }}
            onSubmit={handleSubmit}
            // validate={validateForm}
          >
            <StyledForm>
              <FormGroup>
                <Label htmlFor="postTitle"></Label>
                <StyledField
                  name="postTitle"
                  className="form-control"
                  placeholder="Title"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="postText"></Label>
                <StyledField
                  name="postText"
                  as="textarea"
                  rows="5"
                  className="form-control"
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
export default CreateAnnouncement;
