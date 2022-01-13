import react from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import db from "../utils/firebase";
import { onSnapshot, collection, setDoc , doc} from "firebase/firestore";

function Admin() {

  const [requests, setRequest] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db,"request"), (snapshot) => {
      setRequest(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  
  const authorize = (index) =>{

    // update the request in the database where the email is the same as the one in the requests array at the index
    const docRef = doc(db,"request",requests[index].email);
    const data = {
      email: requests[index].email,
      password: requests[index].password,
      nome: requests[index].nome,
      authorized: true
    }
    setDoc(docRef,data);

  }


  const complete = (index) => {
  
    authorize(index);

    let newRequests = [...requests];
    newRequests.splice(index,1);
    setRequest(newRequests);

    }
  

  return (
      // print all the request
      <Container>


        {
        requests.lenght ? requests.map((request,index) => {
              if (request.authorized === false && !requests.admin) {
              return (
                <Request>
                  <h2>{request.nome}</h2>
                  <h2>{request.email}</h2>
                  <h2>{request.password}</h2>
                  <button onClick={() => complete(index)}>Approva</button>
                </Request>
              );
            }
            } 
            )
   : <Error>Nessuna richiesta</Error>
        }


      </Container>
  );



}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Request = styled.div`
  display: flex;
  flex-direction: row; 

  & > * {
    margin: 10px;
  }
  
`;


const Error = styled.h1`
  color: red;
  text-align: center;
`;

export default Admin;
