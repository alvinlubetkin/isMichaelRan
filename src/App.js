import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [mike, setMike] = useState("not ran");
  console.log(mike);
  const setRan = () => {
    if (mike == "ran") {
      setMike(`not Ran`);
    } else {
      setMike("ran");
    }
    console.log(mike);
  };
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <button onClick={() => setRan()}>Make Michael Ran</button>
      <div>is michael ran? => {mike}</div>
    </div>
  );
}

export default App;
