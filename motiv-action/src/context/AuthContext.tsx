import { supabase } from "@/lib/supabase";
import { AuthActions } from "@/store/auth/actions";
import { useAuthReducer } from "@/store/auth/hooks";
import { AuthError, Session } from "@supabase/supabase-js";
import * as React from "react";

type AuthContextProps = {
  token: null | string;
  user: Session["user"] | null;
  signOut: () => Promise<{
    error: AuthError | null;
  } | void>;
};

export enum AuthEvents {
  SIGNED_IN = "SIGNED_IN",
  SIGNED_OUT = "SIGNED_OUT",
  TOKEN_REFRESHED = "TOKEN_REFRESHED",
  USER_UPDATED = "USER_UPDATED",
  PASSWORD_RECOVERY = "PASSWORD_RECOVERY",
}

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextProps>({
  token: null,
  user: null,
  signOut: async () => {
    return { error: null };
  },
});

export default function AuthProvider({
  children,
}: AuthProviderProps): JSX.Element {
  const [authState, dispatch] = useAuthReducer();
  const signOut = () => supabase.auth.signOut();

  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case AuthEvents.SIGNED_IN:
          if (session) {
            dispatch({
              payload: {
                token: session.access_token,
                user: session.user,
              },
              type: AuthActions.SIGN_IN,
            });
          }

          break;
        case AuthEvents.SIGNED_OUT:
          dispatch({
            payload: {
              token: null,
              user: null,
            },
            type: AuthActions.SIGN_OUT,
          });
          break;
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch]);

  React.useEffect(() => {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        dispatch({
          payload: {
            token: session.access_token,
            user: session.user,
          },
          type: AuthActions.SET_AUTH_DATA,
        });
      }
    }
    getSession();
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{ token: authState.token, user: authState.user, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
