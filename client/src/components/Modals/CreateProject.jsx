import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../utils/requests";
import { getAllTeams } from "../../utils/requests";
import { updateProject } from "../../utils/requests";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Field, Form } from "formik";
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledButton,
  StyledField,
  StyledForm,
  StyledCloseButton,
} from "./Modals.module";

const CreateProject = ({ updatePage, buttonText, projNameProp, projectDescription, projectID, teamID }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projName, setProjName] = useState(projNameProp);
  const [projDescription, setProjDescription] = useState(projectDescription);
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState(0);

  const dispatch = useDispatch();
  const toggle = () => {setModalOpen(!modalOpen)};
  const handleSubmit = async (values) => {
    const project = {
      teamId: team,
      name: projName,
      description: projDescription,
      active: true
    };
    if (projectID != undefined || projectID != null) {
      await updateProject(project, projectID)
    } else {
      await createProject(project)
    }
    updatePage();
    setModalOpen(false);
  };

  const handleGetTeams = async () => {
    let DBTeams = await getAllTeams()
    if (teamID != undefined) {
      //sets id for team
      setTeam(teamID)
      //sorts DBTeams so correct team populates first
      let temp = DBTeams[0];
      let index = DBTeams.indexOf(DBTeams.find(i => i.id === teamID))
      DBTeams[0] = DBTeams[index];
      DBTeams[index] = temp;
      //sets teams
      setTeams(DBTeams)
    } else {
      setTeams(DBTeams)
      setTeam(DBTeams[0].id)
    }
  }
  useEffect(() => {
    handleGetTeams();
  }, []);


  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        {" "}
        {buttonText}
      </Button>
      <StyledModal isOpen={modalOpen} toggle={toggle}>
        {" "}
        <StyledModalHeader>
          {" "}
          Create or Edit Project
          <StyledCloseButton color="danger" onClick={() => setModalOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
          <Formik
            initialValues={{
              projectName: "",
              description: ""
            }}
            onSubmit={handleSubmit}
          >
            <StyledForm>
              <FormGroup>
                <Label htmlFor="projectName"></Label>
                <StyledField
                  name="projectName"
                  as="textarea"
                  rows="1"
                  placeholder="Project Name"
                  className="form-control"
                  value={projName}
                  onChange={e => setProjName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description"></Label>
                <StyledField
                  name="description"
                  as="textarea"
                  rows="5"
                  className="form-control"
                  placeholder="Description"
                  value={projDescription}
                  onChange={e => setProjDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="team">
                  <select onChange={e => setTeam(e.target.value)} name="team">
                  {teams.map(({ teamName, id }) => (
                    <option key={id} value={id}>{teamName}</option>
                  ))}
                  </select>
                </Label>
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

export default CreateProject;
