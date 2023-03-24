import React from "react";
import { useState } from "react";
import axios from "axios";

import url from "./Link";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleemail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const login = () => {
    console.log(email, password);
    axios
      .post(`${url}/user/login`, { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("notestoken",res.data.token)
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input onChange={handleemail} type="email" placeholder="enter email" />{" "}
      <br />
      <input
        onChange={handlepassword}
        type="password"
        placeholder="enter password"
      />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
