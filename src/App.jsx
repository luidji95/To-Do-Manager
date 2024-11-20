import { useState } from "react";
import "./App.css";
import FormRegistration from "./FormRegistration";
import Header from "./Header";
import ToDoList from "./ToDoList";
import NewToDo from "./NewToDo";

function App() {
  const [loggedUser, setLoggedUser] = useState("");
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [accounts, setAccounts] = useState([
    {
      username: "Milos",
      eMail: "milos.petrovic09.95@gmail.com",
      password: "Milos12091995",
      toDos: [],
    },
    {
      username: "Jovana",
      eMail: "jovana.maric88@gmail.com",
      password: "Jovana19880516",
      toDos: [],
    },
    {
      username: "Stefan",
      eMail: "stefan.popovic78@gmail.com",
      password: "Stefan19781203",
      toDos: [],
    },
  ]);

  const handleLogin = (email, password) => {
    const user = accounts.find(
      (acc) => acc.eMail === email && acc.password === password
    );
    if (user) {
      setLoggedUser(user.username);
    } else {
      alert("Wrong email or password");
    }
  };

  const handleLogout = () => {
    setLoggedUser("");
  };

  const addToDo = (e, todoName) => {
    e.preventDefault();
    if (!todoName.trim()) {
      alert("Task name cannot be empty!");
      return;
    }

    const newToDo = {
      id: Date.now(),
      name: todoName,
      completed: false,
    };

    setTodos((prev) => {
      return [...prev, newToDo];
    });
  };

  // const  handleDelete(id) {
  //   setTodos(todos.filter((todo) => todo.id !== id))
  // }

  return (
    <>
      {!loggedUser ? (
        <FormRegistration handleLogin={handleLogin} />
      ) : (
        <>
          <Header username={loggedUser} handleLogOut={handleLogout} />
          {isAdding ? (
            <NewToDo addToDo={addToDo} onCancel={() => setIsAdding(false)} />
          ) : (
            <button className="add-task-btn" onClick={() => setIsAdding(true)}>
              Add New ToDo
            </button>
          )}
          <ToDoList todos={todos} setTodos={setTodos} />
        </>
      )}
    </>
  );
}

export default App;
