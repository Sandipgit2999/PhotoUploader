import React from "react";
import axios from "axios";
import { useState } from "react";
import url from "./Link";

const EditNotes = ({payload}) => {
    console.log("el",payload)
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [note, setNote] = useState("");

  const handletitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handlenote = (e) => {
    console.log(e.target.value);
    setNote(e.target.value);
  };

  const handletag = (e) => {
    console.log(e.target.value);
    setTag(e.target.value);
  };

  const updatenote = (id) => {
    axios
      .put(
        `${url}/notes/${id}`,
        { title, note, tag },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("notestoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input onChange={handletitle} type="text" placeholder="title" /> <br />
      <input onChange={handletag} type="text" placeholder="tag" />
      <br />
      <input onChange={handlenote} type="text" placeholder="note" />
      <br />
      <input type="file" placeholder="choose file" />
      <button onClick={()=>updatenote(payload._id)}>Update</button>
    </div>
  );
};

export default EditNotes;
