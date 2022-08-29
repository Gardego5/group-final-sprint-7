import { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Field, Form } from "formik";

const CreateAnnouncement = ({ posterName }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const toggle = () => setModalOpen(!modalOpen);
  const handleSubmit = (values) => {
    const announcement = {
      posterName: posterName,
      postText: values.postText,
      date: new Date(Date.now()).toISOString(), //create a new [Date] object and set it to the time the form was submitted
    };

    // dispatch(postAnnouncement(announcement)); // dispatch the action to update the state of the component
    // setModalOpen(false); //when submitted the modal closes as the [modalOpen] is set to [false] by the [useState]/[setModalOpen]
  };
  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        Add Announcement
      </Button>
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
