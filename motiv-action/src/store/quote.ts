import { useReducer } from "react";

const initialState: Quote = {
  id: NaN,
  quote: "default content",
  author: "default name of the author",
  author_id: NaN,
  created_at: "default creation date",
};

export const useQuote = () => {
  const [quote, dispatchQuote] = useReducer(quoteReducer, initialState);
  return [quote, dispatchQuote] as const;
};

type QuoteActions = { type: string };

const quoteReducer = (state: Quote, action: QuoteActions) => {
  return state;
};
