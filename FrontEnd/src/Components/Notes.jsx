import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import url from "./Link";
import Login from "./Login";
import { Link } from "react-router-dom";
import EditNotes from "./EditNotes";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const token = localStorage.getItem("notestoken");
  console.log("token", token);

  const getNotes = () => {
    axios
      .get(`${url}/notes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("notestoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${url}/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("notestoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        //setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handlelogout = () => {
  //   localStorage.setItem("notestoken", null);
  // };

  useEffect(() => {
    getNotes();
  }, []);
  if (token !== null) {
    return (
      <div>
        <button >Log Out</button>
        <Link to="/notes/create">
          {" "}
          <button>Add new notes</button>
        </Link>
        {notes.length > 0 &&
          notes.map((el, i) => (
            <div key={i}>
              <h3>{el.title}</h3>
              <h2>{el._id}</h2>
              <h4>{el.tag}</h4>
              <p>{el.note}</p>
              <img src={el.imageurl} alt="unavailable" />
              {/* <Link to="/notes/edit">
                {" "}
                <button>Edit</button>
              </Link> */}

              <EditNotes payload={el} />
              <button
                onClick={() => {
                  handleDelete(el._id);
                }}
              >
                Delete
              </button>
            </div>
          ))}

        <h1>Notes section</h1>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Notes;
