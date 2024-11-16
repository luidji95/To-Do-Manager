import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormRegistration from "./FormRegistration";
import Header from "./Header";

function App() {
  const [loggedUser, setLoggedUser] = useState("");

  const Accounts = [
    {
      username: "Milos",
      eMail: "milos.petrovic09.95@gmail.com",
      password: "Milos12091995",
    },
    {
      username: "Jovana",
      eMail: "jovana.maric88@gmail.com",
      password: "Jovana19880516",
    },
    {
      username: "Stefan",
      eMail: "stefan.popovic78@gmail.com",
      password: "Stefan19781203",
    },
  ];

  function handleLogin(email, password) {
    const user = Accounts.find(
      (acc) => acc.eMail === email && acc.password === password
    );
    if (user) {
      setLoggedUser(user.username);
    } else {
      alert("Wrong email or password");
    }
  }

  return (
    <>
      <FormRegistration handleLogin={handleLogin} />
      <Header username={loggedUser} />
    </>
  );
}

export default App;
