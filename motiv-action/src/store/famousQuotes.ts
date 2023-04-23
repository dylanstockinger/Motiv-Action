import { useReducer } from "react";

export type FamousQuoteState = FamousQuote | null;

const initialState: FamousQuoteState = null;

export const useFamousQuote = () => {
  const [famousQuote, dispatchFamousQuote] = useReducer(
    famousQuoteReducer,
    initialState
  );
  return [famousQuote, dispatchFamousQuote] as const;
};

type FamousQuoteActions = { type: string; payload: FamousQuote };

export enum Actions {
  SET_FAMOUS_QUOTE = "SET_FAMOUS_QUOTE",
}

const famousQuoteReducer = (
  state: FamousQuoteState,
  action: FamousQuoteActions
) => {
  switch (action.type) {
    case Actions.SET_FAMOUS_QUOTE:
      return action.payload;

    default:
      break;
  }
  return state;
};
