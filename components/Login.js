import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Whatslogo from "../logos/whatslogo.png";
import Image from "next/image";
import { Avatar, IconButton, Button } from "@material-ui/core";
import {auth , provider} from "../firebase"
import { signInWithPopup } from 'firebase/auth';
function Login() {

const signIn = async () =>{

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        // Handle successful sign-in
      } catch (error) {
        // Handle sign-in error
        console.error(error);
      }
    
}

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo alt="whatsapp" src={Whatslogo}  />
        <Button onClick={signIn} >Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
display: grid;
place-items:center;
height: 100vh;
background-color: whitesmoke;
`;
const LoginContainer = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius:5px;
box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7)
`;
const Logo = styled(Image)`
height: 200px;
width:200px;
margin-bottom: 50px;
`;
