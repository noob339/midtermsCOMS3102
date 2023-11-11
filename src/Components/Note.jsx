import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <i
        onClick={() => props.onDelete(props.id)}
        className="fas fa-trash-alt"
      ></i>
    </div>
  );
}

export default Note;
