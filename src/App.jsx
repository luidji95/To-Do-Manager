import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormRegistration from "./FormRegistration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormRegistration />
    </>
  );
}

export default App;
