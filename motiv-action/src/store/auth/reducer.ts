import { AuthActions } from "./actions";
import { AuthState } from "./constants";

const authReducer = (state: AuthState, action: PayloadAction) => {
  switch (action.type) {
    case AuthActions.SIGN_UP:
      return { ...state };
    case AuthActions.SIGN_IN:
      return { ...state };
    case AuthActions.SIGN_OUT:
      return { ...state };

    default:
      break;
  }
  return state;
};

export default authReducer;
