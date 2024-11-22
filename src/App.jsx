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
      userId: 1,
    },
    {
      username: "Jovana",
      eMail: "jovana.maric88@gmail.com",
      password: "Jovana19880516",
      toDos: [],
      userId: 2,
    },
    {
      username: "Stefan",
      eMail: "stefan.popovic78@gmail.com",
      password: "Stefan19781203",
      toDos: [],
      userID: 3,
    },
  ]);

  const handleLogin = (email, password) => {
    const user = accounts.find(
      (acc) => acc.eMail === email && acc.password === password
    );
    if (user) {
      setLoggedUser(user.username);
      setTodos(user.toDos);
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

    setAccounts((prevAccounts) =>
      prevAccounts.map((acc) =>
        acc.username === loggedUser
          ? { ...acc, toDos: [...acc.toDos, newToDo] }
          : acc
      )
    );

    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    setAccounts((prevAccounts) =>
      prevAccounts.map((acc) =>
        acc.username === loggedUser
          ? { ...acc, toDos: acc.toDos.filter((todo) => todo.id !== id) }
          : acc
      )
    );
  };

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
          <ToDoList
            todos={todos}
            setTodos={setTodos}
            handleDelete={handleDelete}
          />
        </>
      )}
    </>
  );
}

export default App;
