import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Subscriptions from "../subscriptions/subscritions";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/data",
        {
          userName: window.sessionStorage.getItem("userName"),
          password: window.sessionStorage.getItem("password"),
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(response => {
        setData(response.data );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return(
    <>
       <div className="home">
        <div className="subscriptions">
            < Subscriptions />
        </div>
       </div>
    </>
  );
};
export default Home;
