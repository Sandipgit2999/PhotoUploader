import React from "react";
import { useState } from "react";
import axios from "axios";
//import url from "./Link";

const Addforms = () => {
  const [imagefile, setFile] = useState("");
  console.log("file", imagefile);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [note, setNote] = useState("");

  function handleChange(event) {
    console.log("target", event.target.files[0])
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:4000";
    const formData = new FormData();
    console.log(formData)
    //formData.append("file", imagefile);
    formData.append("file", title);
    formData.append("file", tag);
    formData.append("file", note);

    console.log(formData, "formdata");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("notestoken")}`,
      },
    };
    axios.post(`${url}/notes/create`, formData, config).then((response) => {
      console.log(response.data);
    });
  }

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

  const Addnote = () => {
    axios
      .post(
        `${url}/notes/create`,
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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />

        <input onChange={handletitle} type="text" placeholder="title" />
        <input onChange={handletag} type="text" placeholder="tag" />
        <input onChange={handlenote} type="text" placeholder="note" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Addforms;
