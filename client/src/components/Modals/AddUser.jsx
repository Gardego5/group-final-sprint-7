import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormGroup, Label } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
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

import { addUser } from "../../utils/requests";
import { getCompany } from "../../reducers/rootReducer";
import UserRegistry from "../../pages/UserRegistry";

// const ErrorMessage = styled.p`
//   color: red;
// `;

const AddUser = ({ increaseUsers }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adminVal, setAdminVal] = useState(null);

  const dispatch = useDispatch();
  const toggle = () => setModalOpen(!modalOpen);
  const setCompanyId = useSelector(getCompany);

  const handleAdmin = (e) => {
    setAdminVal(e.target.value);
  };

  const handleSubmit = (values) => {
    const user = {
      admin: adminVal,
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
    setModalOpen(false);
    increaseUsers();
  };

  const validateUserForm = (values) => {
    const errors = {};
    if (values.firstName.length < 1) {
      errors.firstName = "Missing first name";
    }
    if (values.lastName.length < 1) {
      errors.lastName = "Missing last name";
    }
    if (values.username.length < 1) {
      errors.username = "Missing username";
    }
    if (values.email.length < 1) {
      errors.email = "Missing email";
    }
    if (values.phone.length < 1) {
      errors.phone = "Missing phone number";
    }
    if ((values.password.length || values.confirmPw.length) < 4) {
      errors.password = "Password must be at least 2 characters";
    } else if ((values.password.length || values.confirmPw.length) > 15) {
      errors.password = "Password must be 15 characters or less";
    }
    if (values.password != values.confirmPw) {
      errors.confirmPw = "Password and Confirm Password are not matching";
    }
    return errors;
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
            enableReinitialize={true}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              username: "",
              password: "",
              confirmPw: "",
            }}
            onSubmit={handleSubmit}
            validate={validateUserForm}
          >
            <StyledForm>
              <FormGroup>
                <Label htmlFor="firstName"></Label>
                <StyledField
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
                <ErrorMessage name="firstName" component="p">
                  {(msg) => <p className="text-danger">{msg}</p>}{" "}
                  {/* for each error msg create a paragraph witht the msg in red color */}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName"></Label>
                <StyledField
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
                <ErrorMessage name="lastName">
                  {(msg) => <p className="text-danger">{msg}</p>}{" "}
                  {/* for each error msg create a paragraph witht the msg in red color */}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email"></Label>
                <StyledField
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <ErrorMessage name="email">
                  {(msg) => <p className="text-danger">{msg}</p>}{" "}
                  {/* for each error msg create a paragraph witht the msg in red color */}
                </ErrorMessage>
                <Label htmlFor="phone"></Label>
                <StyledField
                  name="phone"
                  placeholder="Phone Number"
                  className="form-control"
                />
                <ErrorMessage name="phone">
                  {(msg) => <p className="text-danger">{msg}</p>}{" "}
                  {/* for each error msg create a paragraph witht the msg in red color */}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username"></Label>
                <StyledField
                  name="username"
                  placeholder="Username"
                  className="form-control"
                />
                <ErrorMessage name="username">
                  {(msg) => <p className="text-danger">{msg}</p>}{" "}
                  {/* for each error msg create a paragraph witht the msg in red color */}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password"></Label>
                <StyledField
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <ErrorMessage name="password">
                  {(msg) => <p className="text-danger">{msg}</p>}{" "}
                  {/* for each error msg create a paragraph witht the msg in red color */}
                </ErrorMessage>
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
              <Label htmlFor="admin"></Label>
              <select
                name="admin"
                className="form-control"
                value={adminVal}
                onChange={handleAdmin}
              >
                <option value={null}>Pick an option</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              <StyledButton
                type="submit"
                color="primary"
                disabled={adminVal === null}
              >
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
