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

const ViewUser = ({ user, abbreviate }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen(!modalOpen);

  const displayName = (a) => `${user?.profile?.firstName} ${
    a ? `${user?.profile?.lastName[0]}.` : user?.profile?.lastName
  }`;

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
            <div className="info-row">
              <div className="info-group">
                <p className="info-field">{user?.username}</p>
                <p className="info-label">username</p>
              </div>
            </div>
            <div className="info-row">
              <div className="info-group">
                <p className="info-field">{user?.profile?.firstName}</p>
                <p className="info-label">first name</p>
              </div>
              <div className="info-group">
                <p className="info-field">{user?.profile?.lastName}</p>
                <p className="info-label">last name</p>
              </div>
            </div>
            <div className="info-row">
              <div className="info-group">
                <p className="info-field">{user?.profile?.email}</p>
                <p className="info-label">email</p>
              </div>
            </div>
            <div className="info-row">
              <div className="info-group">
                <p className="info-field">{user?.profile?.phone}</p>
                <p className="info-label">phone</p>
              </div>
            </div>
            <div className="info-row">
              <div className="info-group">
                <p className="info-field">{user?.status}</p>
                <p className="info-label">status</p>
              </div>
              <div className="info-group">
                <p className="info-field">{user?.active ? "Yes" : "No"}</p>
                <p className="info-label">active</p>
              </div>
              <div className="info-group">
                <p className="info-field">{user?.admin ? "Yes" : "No"}</p>
                <p className="info-label">admin</p>
              </div>
            </div>
          </StyledUserInfo>
        </StyledModalBody>
      </StyledModal>
    </>
  );
};

export default ViewUser;
