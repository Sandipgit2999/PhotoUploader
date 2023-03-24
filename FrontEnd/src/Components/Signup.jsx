import React from "react";
import { useState } from "react";
import axios from "axios";
import url from "./Link";

const Signup = () => {
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

  const signup = () => {
    console.log(email, password);
    axios
      .post(`${url}/user/signup`, { email, password })
      .then((res) => {
        console.log(res);
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
      <button onClick={signup}>Sign up</button>
    </div>
  );
};

export default Signup;
