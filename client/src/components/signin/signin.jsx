import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Signin=()=>{
  
const [userData,setUserData]=useState({
  userName:"",
  password:"",
  message:""
});
const handleChange=(event)=>{
   event.preventDefault();
   setUserData(prev=>{
    return{
      ...prev,
      [event.target.name]:event.target.value,
    }
   })
}
const signin=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/signin', userData,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (response) {
      setUserData(prev=>{
        return({
          ...prev,
          message:response.data.message,
        })
      }
      )
      window.sessionStorage.setItem("userName",response.data.user.userName);
      window.sessionStorage.setItem("password",response.data.user.password);
      window.location.replace('/home');
    })
    .catch(function (error) {
      console.log(error);
    });
}

  return(
    <>
    <p>{userData.message}</p>
      <form >
        <input type="text" name="userName" onChange={handleChange} value={userData.userName}  placeholder="Usernme"/>
        <input type="password" name="password" onChange={handleChange} value={userData.password} placeholder="Password" />
        <button onClick={signin} >Signin</button>
      </form>
        <Link to="/signup" >Signup</Link>
    </>
  )
}

export default Signin;

