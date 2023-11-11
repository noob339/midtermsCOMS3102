import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { notes } from "../Notes";
import Note from "./Note";

function List() {
  return (
    <div className="body">
      <Header />
      <div>
        {notes.map((list) => (
          <Note key={list.id} props={list} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default List;
