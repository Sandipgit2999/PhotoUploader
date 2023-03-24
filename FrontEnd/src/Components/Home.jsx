import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import url from "./Link";
import { Link } from "react-router-dom";

const Home = () => {
  // const [notes, setNotes] = useState([]);

  // const getNotes = () => {
  //   axios
  //     .get(`${url}/notes`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("notestoken")}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setNotes(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getNotes();
  // }, []);

  return (
    <div>
      {/* {notes.length > 0 &&
        notes.map((el, i) => (
          <div key={i}>
            <p>{el.title}</p>
            <img src={el.imageurl} alt="aabcd" />
          </div>
        ))} */}
      welcome to homepage
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/notes">Notes</Link>
      <p>My name is sandip</p>
    </div>
  );
};

export default Home;
