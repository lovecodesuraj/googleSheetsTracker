import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

const Subscriptions = () => {

  const client={
    userName: window.sessionStorage.getItem("userName"),
  }
  
  const googleAuth=()=>{

    //  window.open(
    //   "http://localhost:5000/auth/google",
    //   "_self"
    //  )
    axios.post('http://localhost:5000/auth/google',client ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (response) {console.log(response.data)})
    .catch(function (error) {
      console.log("kuch to erro h yrr");
    });
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
