import React from "react";
import { useState } from "react";

import Register from "./register";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import db from "../utils/firebase";
import { collection, setDoc,doc} from "firebase/firestore";


function Registrazione() {


    const [Email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");
    const [nome , SetNome] = useState("");

    const [Errore,SetErrore] = useState("hidden");

    const InserisciDati = (e) => {

        e.preventDefault();
        const docRef = doc(db,"request",Email);
        const data = {
            email: Email,
            password: password,
            nome: nome,
            authorized: false,
        }
        setDoc(docRef,data);

        SetErrore("visible");



    }
// sanpietro@gmail.com
//232332

  return (
 
    <Container>
    <h1>Accesso</h1>
    <FormContainer action="/" onSubmit={InserisciDati}>

      <Input type="text" name="email" id="email" placeholder="email" onChange={(e) => {SetEmail(e.target.value)}} required/>
      <Input type="text" name="nome" id="nome" placeholder="Nome Società" onChange={(e) => {SetNome(e.target.value)}} required/>
      <Input type="text" name="password" id="password" placeholder="Password" onChange={(e) => {SetPassword(e.target.value)}} required/>

      <ButtonContainer>
        <LoginButton type="submit" href="/" className="btn-form">Registrati</LoginButton>
        <Link to = "/login"> <RegisterButton>Login</RegisterButton></Link>
      </ButtonContainer>
      <h3 className="error-message" style={{visibility:Errore}}>Registrazione Avvenuta Aspetta di essere approvato..</h3>
    </FormContainer>
  </Container>

  );
}

const Container = styled.div`

    background-color: #191919;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3rem;
        font-weight: bold;
        color: #fff;
    }

`

const FormContainer = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 1.2rem;
`

const Label = styled.label`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const ButtonContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    & > * {
        margin: 0 1rem;
    }

    ` 

const LoginButton = styled.button`

    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;

    &:hover {
        background-color: #000;
    }


`

const RegisterButton = styled.button`

    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;

    &:hover {
        background-color: #000;
    }

    `


export default Registrazione;