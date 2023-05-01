import { useReducer } from "react";
import { initialState } from "./constants";
import quoteReducer from "./reducer";

export const useQuote = () => {
  const [quote, dispatchQuote] = useReducer(quoteReducer, initialState);
  return [quote, dispatchQuote] as const;
};
