import { FamousActions } from "./actions";
import { FamousQuoteState } from "./constants";

const famousReducer = (
  state: FamousQuoteState,
  action: PayloadAction<FamousQuoteState>
) => {
  switch (action.type) {
    case FamousActions.SET_FAMOUS_QUOTE:
      return action.payload;

    default:
      break;
  }
  return state;
};

export default famousReducer;
