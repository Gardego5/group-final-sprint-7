import { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
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
      title: props.title,
      postText: values.postText,
      date: new Date(Date.now()).toDateString(), //create a new [Date] object and set it to the time the form was submitted
    };

    setAnnouncement(announcement);

    // const dispatch = useDispatch();
    // dispatch(postAnnouncement(announcement)); // dispatch the action to update the state of the component
    // setModalOpen(false); //when submitted the modal closes as the [modalOpen] is set to [false] by the [useState]/[setModalOpen]
  };
  console.log(announcement);
  return (
    <>
      <BasicButton outline onClick={() => setModalOpen(true)}>
        New
      </BasicButton>
      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader>
          Add Announcement
          <Button color="danger" onClick={() => setModalOpen(false)}>
            X
          </Button>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              postText: "",
            }}
            onSubmit={handleSubmit}
            // validate={validateForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="postText"></Label>
                <Field
                  name="postText"
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

export default CreateAnnouncement;
