import { useState } from "react";
import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";
import "./assets/css/tiny-slider.css";
import PetsList from "./Components/PetsList";

function App() {
  const [userInput, setUserInput] = useState("");

  const inputChanging = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <div className="App">
      {" "}
      <PetsList />
    </div>
  );
}

export default App;
