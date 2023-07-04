import { atom } from "jotai";

export const newAtom = atom(10);
export const derivedAtom = atom((get) => get(newAtom) * 2);
