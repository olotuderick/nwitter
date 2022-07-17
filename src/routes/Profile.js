import firebase from "firebase/compat/app";

import React from "react";
const Profile = () => {
  const onLogOutClick = () => firebase.auth().signOut();
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
