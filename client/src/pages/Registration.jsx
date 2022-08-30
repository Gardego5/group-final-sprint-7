import styled from "styled-components";

const RegisBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisTitle = styled.h1`
  color: #1ba098;
  font-size: 50px;
  margin-top: 1em;
  text-align: center;
`;

const Form = styled.div`
  height: 700px;
  width: 400px;
  border: 6px solid #1ba098;
  border-radius: 25px;
  padding: 30px;
  /* justify-content: space-evenly; */
  align-items: center;
  text-align: center;
`;

const FormTitle = styled.h4`
  font-size: 20px;
  color: #1ba098;
`;

const UserInfo = styled.input`
  height: 35px;
  width: 250px;
  color: black;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
`;

const Registration = () => {
  return (
    <RegisBody>
      <RegisTitle>Register New User</RegisTitle>
      <Form>
        <FormTitle>Username:</FormTitle>
        <UserInfo type="text" placeholder="Ex. Charlizard"></UserInfo>
        <FormTitle>Password:</FormTitle>
        <UserInfo type="text" placeholder="Ex. asdas0234"></UserInfo>
        <FormTitle>First Name:</FormTitle>
        <UserInfo type="text" placeholder="Ex. Charlie"></UserInfo>
        <FormTitle>Last Name:</FormTitle>
        <UserInfo type="text" placeholder="Ex. Daniel"></UserInfo>
        <FormTitle>Email:</FormTitle>
        <UserInfo type="text" placeholder="Ex. somebody@email.com"></UserInfo>
        <FormTitle>Phone Number:</FormTitle>
        <UserInfo type="text" placeholder="Ex. 940-316-7461"></UserInfo>
      </Form>
    </RegisBody>
  );
};

export default Registration;
