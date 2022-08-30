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

const AddUser = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const toggle = () => setModalOpen(!modalOpen);
  const handleSubmit = (values) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      confirmPw: values.confirmPw,
      admin: values.admin
    };
  };
  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        {" "}
        Add User
      </Button>
      <Modal isOpen={modalOpen} toggle={toggle}>
        {" "}
        <ModalHeader>
          {" "}
          Add User
          <Button color="danger" onClick={() => setModalOpen(false)}>
            X
          </Button>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPw: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="firstName"></Label>
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName"></Label>
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email"></Label>
                <Field
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password"></Label>
                <Field
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPw"></Label>
                <Field
                  name="confirmPw"
                  placeholder="Confirm Password"
                  className="form-control"
                />
              </FormGroup>
              <h2>Make user an admin role?</h2>
              <FormGroup>
                <Label htmlFor="admin"></Label>
                <Field name="admin" as="select" className="form-control">
                  <option value={true}>true</option>
                  <option value={false}>false</option>
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

export default AddUser;
