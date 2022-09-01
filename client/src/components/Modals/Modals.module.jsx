import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Field, Form } from "formik";

import styled from "styled-components";

export const StyledModal = styled(Modal)`
  background: rgb(11, 45, 69);
  border-radius: 6px;
  position: relative;
`;
export const StyledModalHeader = styled(ModalHeader)`
  background: rgb(11, 45, 69);
  color: rgb(222, 185, 146);
  border: none;
  display: grid;
  place-content: center;
`;
export const StyledModalBody = styled(ModalBody)`
  background: rgb(11, 45, 69);
`;
export const StyledButton = styled(Button)`
  background: rgb(27, 160, 152);
`;
export const StyledField = styled(Field)`
  color: rgb(222, 185, 146);
  background: rgb(11, 45, 69);
  border: none;
  width: 75%;
  border-radius: 0;
  border-bottom: 1px solid rgb(222, 185, 146);
  &::placeholder {
    color: rgb(222, 185, 146);
  }
  &:focus {
    background: rgb(11, 45, 69);
    color: rgb(222, 185, 146);
  }
  ::-webkit-scrollbar {
    display: none;
  }
  margin: auto;
`;

export const StyledForm = styled(Form)`
  position: relative;
  text-align: center;
`;

export const StyledCloseButton = styled(Button)`
  background: no-repeat scroll 0 0 transparent;
  color: red;
  font-weight: bold;
  border: 3px solid red;
  border-radius: 50px;
  position: absolute;
  right: 2%;
  top: 2%;
`;