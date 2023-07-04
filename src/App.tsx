import { useAtom } from "jotai";
import "./App.css";
import CurrentCount from "./CurrentCount";
import { newAtom } from "./atoms";
import { AnotherComponent } from "./AnotherComponent";
import { useEffect, useRef, useState } from "react";

function CanvasComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClickX = () => {
    const newX = position.x + 1;
    setPosition({ x: newX, y: position.y });
  };

  const handleClickY = () => {
    const newY = position.y + 1;
    setPosition({ x: position.x, y: newY });
  };

  const handleClickXLoads = () => {
    const newX = position.x + 100;
    setPosition({ x: newX, y: position.y });
  };

  const handleClickYLoads = () => {
    const newY = position.y + 100;
    setPosition({ x: position.x, y: newY });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw object based on new position
    context.fillStyle = "red";
    context.fillRect(position.x, position.y, 50, 50);
  }, [position]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + 1,
        y: prevPosition.y + 1,
      }));
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600}></canvas>
      <button onClick={handleClickX} className="m-8 bg-red-300">
        increase x
      </button>
      <button onClick={handleClickY} className="m-8 bg-blue-400">
        increase y
      </button>
      <button onClick={handleClickXLoads} className="m-8 bg-red-300">
        increase x LOADS
      </button>
      <button onClick={handleClickYLoads} className="m-8 bg-blue-400">
        increase y LOADS
      </button>
    </div>
  );
}

function App() {
  const [count, setCount] = useAtom(newAtom);

  const handleClick = () => {
    setCount((number) => number + 1);
  };

  return (
    <div>
      <button onClick={handleClick} className="border border-red-500 p-2 text-red-500">
        Count {count}
      </button>
      <CurrentCount />
      <AnotherComponent />
      <CanvasComponent />
    </div>
  );
}

export default App;
