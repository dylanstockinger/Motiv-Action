import { useReducer } from "react";
import { initialState } from "./constants";
import famousReducer from "./reducer";

export const useFamousQuote = () => {
  const [famousState, dispatchFamousQuote] = useReducer(
    famousReducer,
    initialState
  );
  return [famousState, dispatchFamousQuote] as const;
};
