import { useState } from "react";
import { Button } from "reactstrap";

import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledCloseButton,
} from "./Modals.module";

const ViewProject = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen(!modalOpen);
  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        View Project
      </Button>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        <StyledModalHeader>
          Pass in the Project Name Here
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
            <div>This is the body</div>
        </StyledModalBody>
      </StyledModal>
    </>
  );
};

export default ViewProject;
