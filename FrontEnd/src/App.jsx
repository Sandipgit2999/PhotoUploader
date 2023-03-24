import "./App.css";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";
import Notes from "./Components/Notes";
import Login from "./Components/Login";
import Addnotes from "./Components/Addnotes";
import Home from "./Components/Home";
import EditNotes from "./Components/EditNotes";
import Addforms from "./Components/Addforms";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes/create" element={<Addnotes />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/edit" element={<EditNotes/>} />
      </Routes>
      <Addforms/>
    </div>
  );
}

export default App;
