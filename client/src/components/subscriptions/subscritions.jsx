import React from "react";
import GoogleLogin from "react-google-login";

const Subscriptions = () => {
  
  const googleAuth=()=>{
    window.open(
      'http://localhost:5000/auth/google',
      "_self"
    )
  }
  return (
    <>
      <div className="subscriptions"></div>
      <div className="addSub">
       <button onClick={googleAuth}>Add Account</button>
      </div>
    </>
  );
};

export default Subscriptions;
