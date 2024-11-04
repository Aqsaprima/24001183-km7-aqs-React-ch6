import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavbarStyling from "./components/navbar/NavbarWithStyling";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About", "Logout"];

  return (
    <>
      <NavbarStyling menu={listMenu} name="aqsa" age="12" address="suka maju" />
    </>
  );
}

export default App;
