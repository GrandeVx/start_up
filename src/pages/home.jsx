import React from "react";
import Login from "./login";
import { useState } from 'react';

function Home() {


    const [loggedIn, setLoggedIn] = useState(false);

    return (
        loggedIn ? (
            <h1>Accesso</h1>
          ) : (
            <Login />
          )
    );
    }

export default Home;