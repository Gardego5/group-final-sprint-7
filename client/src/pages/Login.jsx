import styled from "styled-components";
import LogoImg from "../assets/logo.png"

const LoginPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
   color: #1BA098;
   margin-top: 1em;
   text-align: center;
`;

const Subtitle = styled.h3`
   color: #1BA098;
    margin-top: 1em;
    text-align: center;
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 5px solid #DEB992;
    border-radius: 8px;
    box-shadow: 4px 4px 10px 5px #CBCBCB7D;
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
    color: #1BA098;
    ::placeholder,
  ::-webkit-input-placeholder {
    color: #1BA098;
  }
  :-ms-input-placeholder {
     color: #1BA098;
  }
`;

const Logo = styled.img`
    align-self: center;
    height: 4vw;
    width: 5vw;
    background-color: #0D3A59;
    background-size: auto;
`;

const LogoBackground = styled.div`
    margin-top: 2vw;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: #0D3A59;
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
    border: 2px solid #1BA098;
    border-radius: 50px;
    margin-top: 10vw;
    margin-bottom: 2vw;
`;

const Login = () => {

    return(
        <LoginPageDiv>
            <Title>Cook Systems</Title>
            <Subtitle>A FINAL APP</Subtitle>
            <LoginBox>
                <LogoBackground>
                    <Logo src={LogoImg}/>
                </LogoBackground>
                <LoginField type="text" placeholder="username"/>
                <LoginField type="text" placeholder="password"/>
                <LoginButton>Login</LoginButton>
            </LoginBox>
        </LoginPageDiv>
    )
}

export default Login;