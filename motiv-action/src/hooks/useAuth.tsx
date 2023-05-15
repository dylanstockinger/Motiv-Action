import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getStorageValue, STORAGE_KEY } from "@/lib/storage";

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export function useToken(): string {
  const storage = getStorageValue(STORAGE_KEY);
  return storage?.access_token;
}

export function useUser() {
  const { user } = useContext(AuthContext);
  return user;
}
