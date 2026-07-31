import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUser, logout } from "@/store/auth/authSlice";
import type {
  LoginValues,
  SignupValues,
} from "@/features/auth/schemas/auth.schema";

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  // Placeholder implementations until a real auth backend is wired in.
  const login = async (values: LoginValues) => {
    dispatch(
      setUser({
        id: "temp-id",
        name: values.email.split("@")[0],
        email: values.email,
      }),
    );
  };

  const signup = async (values: SignupValues) => {
    dispatch(
      setUser({ id: "temp-id", name: values.name, email: values.email }),
    );
  };

  return {
    user,
    isAuthenticated,
    login,
    signup,
    logout: () => dispatch(logout()),
  };
}
