import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "./SignIn.css";
import "firebase/auth";
import logoIcon from "../../icons/Group 573.png";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";
import Header from "../Header/Header";

const SignIn = () => {
  const [setError] = useState({});
  const history = useHistory();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  var googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const user = result.user;
        localStorage.setItem("name", JSON.stringify(user.displayName));
        localStorage.setItem("email", JSON.stringify(user.email));
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // history.go(0);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ errorCode, errorMessage });
      });
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="login-box text-center">
          <h3 className="heading">Sign in</h3>
          <br />
          <button className="login-btn" onClick={handleGoogleSignIn}>
            <img src={logoIcon} alt="/" className="img-fluid" />
            <b>Continue with Google</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
