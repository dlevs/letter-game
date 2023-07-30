import { useCallback, useEffect, useState } from "react";

const START_TIME = 8000;
const DECREASE_BY_TIME = 200;
const MIN_TIME = 3000;
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
  const [remainingTime, setRemainingTime] = useState(START_TIME);
  const timeMax = getMaxTime(letterIndex);
  const timePercent = remainingTime / timeMax;
  const state =
    timePercent > 0.5 ? "ok" : timePercent > 0.25 ? "risky" : "alert";

  useInterval(
    100,
    useCallback(() => {
      setRemainingTime((remainingTime) => Math.max(remainingTime - 100, 0));
    }, [setRemainingTime])
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",

        background:
          state === "ok"
            ? "#4ade80"
            : state === "risky"
            ? "#fb923c"
            : "#dc2626",
        transition: "background 0.5s",
        color: "white",
      }}
      onClick={() => {
        const nextIndex = remainingTime === 0 ? 0 : letterIndex + 1;

        setLetterIndex(nextIndex);
        setRemainingTime(getMaxTime(nextIndex));
      }}
    >
      {letterIndex > 25 ? (
        <div style={{ fontSize: "10rem" }}>SUCCESS!!</div>
      ) : remainingTime <= 0 ? (
        <div style={{ fontSize: "10rem" }}>GAME OVER!</div>
      ) : (
        <div
          style={{
            fontSize: "10rem",
            animation:
              state === "ok"
                ? "none"
                : state === "risky"
                ? "pulse 0.5s infinite"
                : "pulse 0.25s infinite",
          }}
        >
          {LETTERS[letterIndex]}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "4rem",
        }}
      >
        {(remainingTime / 1000).toFixed(1)}s
      </div>
    </div>
  );
}

function useInterval(timeout: number, callback: () => void) {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, [timeout, callback]);
}

function getMaxTime(letterIndex: number) {
  return Math.max(START_TIME - DECREASE_BY_TIME * letterIndex, MIN_TIME);
}

export default App;
