import React, { useState } from "react";
import SingleNotes from "./SingleNotes";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState("");
  const [car, setCar] = useState({
    model: "Innova",
    year: "2018",
    color: "white",
  });

  setCar({ ...car, color: "red" });

  function updateCurNote(event) {
    setCurNote(event.target.value);
  }

  function addNote() {
    const newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
  }

  const ulStyle = {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  return (
    <>
      <input onChange={updateCurNote} type="text" />
      <button onClick={addNote}>Submit</button>

      <ul style={ulStyle}>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <SingleNotes note={note} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Notes;
