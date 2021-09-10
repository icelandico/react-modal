import React, { useState } from "react";
import './App.css';
import ReactModal from "./components/ReactModal";

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="App">
      <div className="main__container">
        <button className="main__container-button" onClick={() => setModalOpened(true)}>Open Modal</button>
        <ReactModal closeHandler={() => setModalOpened(false)} isOpen={modalOpened} config={{ onBgClose: false }}/>
      </div>
    </div>
  );
}

export default App;
