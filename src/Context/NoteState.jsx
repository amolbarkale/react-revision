import { useState } from "react";
import NotesContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState({
    name: "Harry",
    age: "28",
  });

  const Update = () => {
    setTimeout(() => {
      setState({
        name: "Amol",
        age: "29",
      });
    }, 2000);
  };

  return (
    <NotesContext.Provider value={{ state, Update }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NoteState;
