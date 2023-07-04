import { useAtom } from "jotai";
import { derivedAtom, newAtom } from "./atoms";

export const AndAnother = () => {
  const [count] = useAtom(newAtom);
  const [doubled] = useAtom(derivedAtom);
  return (
    <div>
      <h1 className="text-3xl">{count}</h1>
      <h1 className="text-3xl">{doubled}</h1>
    </div>
  );
};
