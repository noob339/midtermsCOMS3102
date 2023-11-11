import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import List from "./List"; //only used for PHASE 2
import AddNote from "./AddNote";

function App() {
  // an array of individual notes*
  const [notes, setNotes] = useState([]);

  //allows us to add notes with the previous one inserted infront
  function addNewNote(newNote) {
    setNotes((oldNotes) => [newNote, ...oldNotes]);
  }

  //delete note function
  function deleteNote(id) {
    const updatedNotes = notes.filter((_, index) => index !== id);
    setNotes(updatedNotes);
  }

  return (
    <div className="container">
      {/*<List />    // this is to render the notes array, uncomment and comment out the rest to view*/}

      <Header />
      {/*  this component is responsible for adding the note*/}
      <AddNote onAdd={addNewNote} />
      {/* the following helps render the array of notes */}
      {notes.map((noteCard, id) => {
        return (
          <Note
            key={id}
            id={id}
            title={noteCard.title}
            content={noteCard.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
