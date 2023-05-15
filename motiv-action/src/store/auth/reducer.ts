import { User } from "@supabase/supabase-js";
import { AuthActions } from "./actions";
import { AuthState } from "./constants";

const authReducer = (
  state: AuthState,
  action: PayloadAction<{
    token: string | null;
    user: User | null;
  }>
) => {
  switch (action.type) {
    case AuthActions.SIGN_UP:
    case AuthActions.SIGN_IN:
    case AuthActions.SIGN_OUT:
    case AuthActions.SET_AUTH_DATA:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    default:
      break;
  }
  return state;
};

export default authReducer;
