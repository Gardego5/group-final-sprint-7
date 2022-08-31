/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import { useState } from "react";
import BasicButton from "../ModalComponents/BasicButton";
import { Formik } from "formik";
import { createNewAnnouncement } from "../../utils/requests";

// Styling Imports
import { FormGroup, Label } from "reactstrap";
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
  /* ---------------------------------- State --------------------------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [announcement, setAnnouncement] = useState({});

  /* ---------------------------- helper funcitions ------------------------------ */

  // function opens and closes form window
  const toggle = () => setModalOpen(!modalOpen);

  // function to create a new announcement
  const handleSubmit = (values) => {
    const newAnnouncement = {
      author_id: props.userId,
      company_making_announcement_id: props.companyId,
      title: values.title,
      message: values.message,
      time_posted: new Date(Date.now()).toDateString(), //create a new [Date] object and set it to the time the form was submitted
    };
    setAnnouncement(newAnnouncement);

    // call to post a new announcement to database
    createNewAnnouncement(newAnnouncement)
      // after it succesfully saves return to home page
      .then((res) => {
        window.location = "/announcements";
      })
      .catch((err) => console.log(err));
  };
  console.log(announcement);
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
              message: "",
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
