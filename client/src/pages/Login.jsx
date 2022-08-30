import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/logo.png";
import {
  getCredentials,
  setPassword,
  setUser,
  setUsername,
} from "../reducers/rootReducer";
import { loginUser } from "../utils/requests";

const LoginPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: #1ba098;
  margin-top: 1em;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: #1ba098;
  margin-top: 1em;
  text-align: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 5px solid #deb992;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 5px #cbcbcb7d;
  width: 40vw;
  align-self: center;
  margin-bottom: 5vw;
`;

const LoginField = styled.input`
  width: 16vw;
  align-self: center;
  margin-top: 4vw;
  border: none;
  background-color: inherit;
  color: #1ba098;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #1ba098;
  }
  :-ms-input-placeholder {
    color: #1ba098;
  }
`;

const Logo = styled.img`
  align-self: center;
  height: 4vw;
  width: 5vw;
  background-color: #0d3a59;
  background-size: auto;
`;

const LogoBackground = styled.div`
  margin-top: 2vw;
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: #0d3a59;
  height: 7vw;
  width: 7vw;
  border-radius: 50%;
`;

const LoginButton = styled.button`
  width: 7vw;
  height: 2.5vw;
  color: white;
  background-color: inherit;
  align-self: center;
  border: 2px solid #1ba098;
  border-radius: 50px;
  margin-top: 10vw;
  margin-bottom: 2vw;
`;

const Login = () => {
  const dispatch = useDispatch();
  const credentials = useSelector(getCredentials);

  // Local State
  const [redirect, setRedirect] = useState("");

  const handleLogin = async () => {
    const user = await loginUser(credentials);
    if (user) {
      dispatch(setUser(user));
      setRedirect(<Redirect to="/company" />);
    }
  };

  return redirect ? (
    redirect
  ) : (
    <LoginPageDiv>
      <Title>Cook Systems</Title>
      <Subtitle>A FINAL APP</Subtitle>
      <LoginBox>
        <LogoBackground>
          <Logo src={LogoImg} />
        </LogoBackground>
        <LoginField
          type="text"
          placeholder="username"
          value={credentials.username}
          onChange={(event) => dispatch(setUsername(event.target.value))}
        />
        <LoginField
          type="text"
          placeholder="password"
          value={credentials.password}
          onChange={(event) => dispatch(setPassword(event.target.value))}
        />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginBox>
    </LoginPageDiv>
  );
};

export default Login;
