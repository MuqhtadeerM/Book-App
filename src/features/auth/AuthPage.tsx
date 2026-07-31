import { LoginForm } from "@/features/auth/components/LoginForm";
import { SignupForm } from "@/features/auth/components/SignupForm";

interface AuthPageProps {
  mode: "login" | "signup";
}

export function AuthPage({ mode }: AuthPageProps) {
  return mode === "login" ? <LoginForm /> : <SignupForm />;
}
