import React, { useState } from "react";
import './App.css';
import ReactModal from "./components/ReactModal";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="App">
      <div className="main__container">
        <button className="main__container-button" onClick={() => setModalOpened(true)}>Open Modal</button>
        <ReactModal closeHandler={() => setModalOpened(false)} isOpen={modalOpened} config={{ title: "Test Header" }}

        ><ChildComponent /></ReactModal>
      </div>
    </div>
  );
}

export default App;
