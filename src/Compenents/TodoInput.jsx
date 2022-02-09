import { nanoid } from "nanoid";
import { useState } from "react";

export const TodoInput = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log("todoList:", todoList);

  const handleChange = ({ target }) => {
    const title = target.value;
    setValue(title);
  };

  const handelClick = (e) => {
    e.preventDefault();
    const todo = {
      title: value,
      id: nanoid(4),
      completed: false,
    };
    setTodoList([...todoList, todo]);
    setValue("");
  };

  const handleToggle = (e) => {
    const updatedList = todoList?.map((todo) => {
      if (todo.id === e) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(updatedList);
  };

  const handleDlete = (id) => {
    const uppadated = todoList.filter((todo, i) => todo.id !== id);
    setTodoList(uppadated);
  };

  return (
    <>
      <div className="todo">
        <input type="text" onChange={handleChange} />
        <button onClick={(e) => handelClick(e)}>Add todo</button>
      </div>
      {todoList?.map((todo, idx) => (
        <p key={todo.id}>
          {todo.title}
          <button onClick={() => handleToggle(todo.id)}>
            {todo.completed ? "not completed" : "completed"}
          </button>
          <button onClick={() => handleDlete(todo.id)}>Delete</button>
        </p>
      ))}
    </>
  );
};
