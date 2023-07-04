import { useAtom } from "jotai";
import { newAtom } from "./atoms";

export default function CurrentCount() {
  const [count, setCount] = useAtom(newAtom);

  const handleClick = () => {
    setCount((number) => number - 10);
  };

  return (
    <div className="h-56 w-56 border border-lime-500">
      <p className="mx-auto mt-10 w-1/2">Count: {count}</p>
      <button className="border border-cyan-600 text-cyan-600" onClick={handleClick}>
        minus 10
      </button>
    </div>
  );
}
