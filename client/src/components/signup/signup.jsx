import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup=()=>{
 var message="";
const [userData,setUserData]=useState({
  userName:"",
  password:"",
  cPassword:"",
  message:"",
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
const signup=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/signup', userData,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (response) {
      setUserData(prev=>{
        return({
          userName:"",
          password:"",
          cPassword:"",
          message:response.data.message,
        })
      }
      )
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
  return(
    <>
      <p>{userData.message}</p>
       <form >
        <input type="text" name="userName" onChange={handleChange} value={userData.userName}  placeholder="Username"/>
        <input type="password" name="password" onChange={handleChange} value={userData.password} placeholder="Password" />
        <input type="password" name="cPassword" onChange={handleChange} value={userData.cPassword} placeholder="Confirm Password"></input>
        <button onClick={signup} >Signup</button>
      </form>
        <Link to="/" >Signin</Link>
    </>
  )
}

export  default Signup;

// const Signup = () => {
//   const [userData, setUserData] = useState({
//     email:"",
//     firstName:"",
//     lastName:"",
//     password:"",
//   });
//   const handleCb = (response) => {
//     // response=response.json();
//     var response = jwtDecode(response.credential);
//     const data = {
//       firstName: response.given_name,
//       lastName: response.family_name,
//       email: response.email,
//       picture: response.picture,
//     };
//   };

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id:
//         "481840461817-kqnoklcva3bsiu662jkl1icef5ph19ke.apps.googleusercontent.com",
//       callback: handleCb,
//     });

//     google.accounts.id.renderButton(document.getElementById("signinBtn"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);

//   const handleChange = (event) => {
//     event.preventDefault();
//     setUserData((prev) => {
//       return {
//         ...prev,
//         [event.target.name]: event.target.value,
//       };
//     });
//   };

//   const signup=(event)=>{
//     event.preventDefault();
//     fetch("http://localhost:5000/signup", {
//         method: "POST",  
//         body: JSON.stringify(userData),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     .then(response=>console.log(response)).catch(err=>console.log(err))
//   }
//   return (
//     <>
//       <form id="signupForm">
//         <input
//           type="email"
//           onChange={handleChange}
//           value={userData.email}
//           name="email"
//           placeholder="Email"
//         />
//         <input
//           type="text"
//           onChange={handleChange}
//           name="firstName"
//           value={userData.firstName}
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           onChange={handleChange}
//           name="lastName"
//           value={userData.lastName}
//           placeholder="Last Name"
//         />
//         <input
//           type="password"
//           onChange={handleChange}
//           name="password"
//           value={userData.password}
//         />
//         <button onClick={signup}>Signup</button>
//       </form>
//       <div id="signinBtn"></div>
//     </>
//   );
// };

// export default Signup;
