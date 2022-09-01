import { useState } from "react";
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledCloseButton,
} from "./Modals.module";

import BasicButton from "../ModalComponents/BasicButton";
import styled from "styled-components";

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;
  div.info-row {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 2rem;
  }
  div.info-group {
    flex-grow: 1;
  }
  p {
    padding: 0;
    margin: 0;
  }
  p.info-label {
    font-size: 0.8rem;
    color: #1ba098;
    margin-left: 1rem;
  }
  p.info-field {
    border-bottom: 1px solid #deb992;
    text-align: center;
  }
`;

const ViewUser = ({ initialUser, abbreviate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(initialUser);

  const toggle = () => setModalOpen(!modalOpen);

  const displayName = (a) =>
    `${user?.profile?.firstName} ${
      a ? `${user?.profile?.lastName[0]}.` : user?.profile?.lastName
    }`;

  const fields = [
    { value: user?.username, label: "username" },
    [
      { value: user?.profile?.firstName, label: "first name" },
      { value: user?.profile?.lastName, label: "last name" },
    ],
    { value: user?.profile?.email, label: "email" },
    { value: user?.profile?.phone, label: "phone" },
    [
      { value: user?.status, label: "status" },
      { value: user?.active ? "Yes" : "No", label: "active" },
      { value: user?.admin ? "Yes" : "No", label: "admin" },
    ],
  ];

  const genGroup = (group, idx) =>
    Array.isArray(group) ? (
      group.map(genGroup)
    ) : (
      <div className="info-group" key={idx}>
        <p className="info-field">{group.value}</p>
        <p className="info-label">{group.label}</p>
      </div>
    );

  return (
    <>
      <BasicButton onClick={() => setModalOpen(true)} w="auto">
        {displayName(abbreviate)}
      </BasicButton>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        <StyledModalHeader>
          {displayName()}
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
          <StyledUserInfo>
            {fields.map((field, idx) => (
              <div className="info-row" key={idx}>
                {genGroup(field)}
              </div>
            ))}
          </StyledUserInfo>
        </StyledModalBody>
      </StyledModal>
    </>
  );
};

export default ViewUser;
