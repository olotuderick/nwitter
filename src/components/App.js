import React, { useEffect, useState } from "react";
import Approute from "./Router";
import firebase from "firebase/compat/app";
import "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [userObj , setUserObj] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsloggedIn(true);
        setUserObj(user)
      } else {
        setIsloggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return <>{init ? <Approute isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing..."}</>;
}

export default App;
