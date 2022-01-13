import React from "react";
import Register from "./register";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import db from "../utils/firebase";
import { onSnapshot, collection} from "firebase/firestore";


function Login() {

    const [Email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");
    const [Errore,SetErrore] = useState("hidden");
    const [Logged,SetLogged] = useState(false);
    const navigate = useNavigate();

    const Ricerca_Dati = async(e) => {

        e.preventDefault();

        console.log(Email,password);

        onSnapshot(collection(db,"request"), (snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.data().email === Email && doc.data().password === password) {
                    console.log("Accesso");
                    localStorage.setItem("user",JSON.stringify(doc.data()));
                    

                     if (doc.data().admin === true) {
                        navigate("/admin")
                        }

                    else if (doc.data().authorized === true) {
                            navigate("/page")
                        }


                }
            })
        }
        )

        SetErrore("visible");


    }


    return (


        <Container>
        <h1>Accesso</h1>
        <FormContainer action="/" onSubmit={Ricerca_Dati}>

          <Input type="text" name="email" id="email" placeholder="email" onChange={(e) => {SetEmail(e.target.value)}} required/>
          
          <Input type="text" name="password" id="password" placeholder="Password" onChange={(e) => {SetPassword(e.target.value)}} required/>

          <ButtonContainer>
            <LoginButton type="submit" href="/" className="btn-form">Login</LoginButton>
            <Link to = "/register"> <RegisterButton>Registrati</RegisterButton></Link>
          </ButtonContainer>
          <h3 className="error-message" style={{visibility:Errore}}>Società non Ammessa.. Attendi</h3>
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


export default Login;