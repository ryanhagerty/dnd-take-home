import { entity } from "simpler-state";

export const counter = entity(0);

export const increment = (by: number) => {
  counter.set((value) => value + by);
};

export const decrement = (by: number) => {
  counter.set((value) => value - by);
};
