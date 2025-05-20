import { useState } from "react";

import "./App.css";

function App() {
  const [history, setHistory] = useState([0]);

  const [current, setCurrent] = useState(0);

  const count = history[current];

  function increment(): void {
    const newHistory = history.slice(0, current + 1);
    const newCount = count + 1;
    setHistory([...newHistory, newCount]);
    setCurrent(current + 1);
  }

  function decrement(): void {
    const newHistory = history.slice(0, current + 1);
    const newCount = count - 1;
    setHistory([...newHistory, newCount]);
    if(current>0){
    setCurrent(current - 1);
    }
  }

  function undo() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  function redo() {
    if (current < history.length -1){
      setCurrent(current +1);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-150">
      <h1 className="text-2xl mb-10"> count: {count}</h1>

      <button onClick={increment} className="border p-5 mb-5 ">
        increment
      </button>
      <button onClick={decrement} className="border p-5">
        {" "}
        decrement
      </button>
      <div className="flex mt-10">
      <button onClick={undo} className="border p-5">
        {" "}
        undo
      </button>
      <button onClick={redo} className="border p-5">
        {" "}
        redo
      </button>
      </div>
      
    </div>
  );
}

export default App;
