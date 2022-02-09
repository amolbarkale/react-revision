import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import NotesContext from "../Context/noteContext";
export default function Dashboard() {
  const NoteCont = useContext(NotesContext);

  useEffect(() => {
    NoteCont.Update();
  }, []);
  return (
    <div>
      <Link to="/todo">
        <p>This is about {NoteCont.state.name}</p>
        <p>Whose age is {NoteCont.state.age}</p>
        <button>Go to Todo Application</button>
      </Link>
    </div>
  );
}
