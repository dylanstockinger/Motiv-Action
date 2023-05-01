import { useReducer } from "react";
import { initialState } from "./constants";
import authReducer from "./reducer";

export const useAuthReducer = () => {
  const [authState, dispatchAuthState] = useReducer(authReducer, initialState);
  return [authState, dispatchAuthState] as const;
};
