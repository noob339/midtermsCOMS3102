import React, { useState } from "react";

function AddNote(props) {
  //our object
  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  //this function records notes, that simple
  function recordNote(event) {
    event.keyCode === 13
      ? setItem((oldText) => oldText + "\n")
      : setItem({ ...item, [event.target.name]: event.target.value });
  }

  //add a note function
  function addNote(event) {
    if (props.onAdd) {
      props.onAdd({
        title: item.title,
        content: item.content
      });
    }

    //reset the note fields
    setItem({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={item.title}
            placeholder="e.g. Cake Recipe"
            onChange={recordNote}
          />
        </label>
        <br />
        <label>
          Content
          <input
            type="text"
            name="content"
            rows="5"
            cols="75"
            value={item.content}
            placeholder="e.g. eggs, milk, cilantro ..."
            onChange={recordNote}
          />
        </label>
        <i onClick={addNote} className="fas fa-plus-circle fa-2x"></i>
      </form>
    </div>
  );
}

export default AddNote;
