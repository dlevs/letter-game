import { useState } from "react";

const START_TIME = 8000;
const DECREASE_BY_TIME = 200;
const MIN_TIME = 800;
const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function App() {
  const [letterIndex, setLetterIndex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "10rem",
        }}
      >
        {LETTERS[letterIndex]}
      </div>
    </div>
  );
}

export default App;
