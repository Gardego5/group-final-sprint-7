import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { addUser } from "../../utils/requests";
import { getCompany } from "../../reducers/rootReducer";

const AddUser = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const toggle = () => setModalOpen(!modalOpen);
  const setCompanyId = useSelector(getCompany);

  const handleSubmit = (values) => {
    const user = {
      admin: values.admin === "true",
      credentials: {
        password: values.password,
        username: values.username,
      },
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      status: "PENDING",
      company: {
        id: setCompanyId.id,
      },
      // 'confirmPw': values.confirmPw,
    };
    console.log(values);
    addUser(user);
  };
  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        {" "}
        Add User
      </Button>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        {" "}
        <StyledModalHeader>
          {" "}
          Add User
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              username: "",
              password: "",
              confirmPw: "",
              admin: "",
            }}
            onSubmit={handleSubmit}
          >
            <StyledForm>
              <FormGroup>
                <Label htmlFor="firstName"></Label>
                <StyledField
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName"></Label>
                <StyledField
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email"></Label>
                <StyledField
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <Label htmlFor="phone"></Label>
                <StyledField
                  name="phone"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username"></Label>
                <StyledField
                  name="username"
                  placeholder="Username"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password"></Label>
                <StyledField
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPw"></Label>
                <StyledField
                  name="confirmPw"
                  placeholder="Confirm Password"
                  className="form-control"
                />
              </FormGroup>
              <h2
                style={{
                  color: "rgb(222, 185, 146)",
                  margin: "4rem 0rem 2rem 0rem",
                }}
              >
                Make user an admin role?
              </h2>
              <FormGroup>
                <Label htmlFor="admin"></Label>
                <StyledField name="admin" as="select" className="form-control">
                  <option value={null}>Pick an option</option>
                  <option value={"true"}>true</option>
                  <option value={"false"}>false</option>
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

export default AddUser;
