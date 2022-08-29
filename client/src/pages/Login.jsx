import styled from "styled-components";
import LogoImg from "../assets/logo.png"

const LoginPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
   color: blue;
   margin-top: 1em;
   text-align: center;
`;

const Subtitle = styled.h3`
    color: #2d2d6b4a;
    margin-top: 1em;
    text-align: center;
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: black solid 2px;
    border-radius: 8px;
    width: 40vw;
    align-self: center;
    margin-bottom: 5vw;
`;

const LoginField = styled.input`
    width: 20vw;
    align-self: center;
    margin-top: 4vw;
`;

const Logo = styled.img`
    align-self: center;
    margin-top: 2vw;
    height: 3vw;
    width: 5vw;
`;

const LoginButton = styled.button`
    width: 5vw;
    align-self: center;
    border: 2px solid #1BA098;
    border-radius: 50px;
    height: 2vw;
    margin-top: 10vw;
    margin-bottom: 2vw;
`;

const Login = () => {

    return(
        <LoginPageDiv>
            <Title>Cook Systems</Title>
            <Subtitle>A FINAL APP</Subtitle>
            <LoginBox>
                <Logo src={LogoImg}/>
                <LoginField type="text" placeholder="username"/>
                <LoginField type="text" placeholder="password"/>
                <LoginButton>Login</LoginButton>
            </LoginBox>
        </LoginPageDiv>
    )
}

export default Login;