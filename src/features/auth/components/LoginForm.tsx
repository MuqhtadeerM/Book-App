"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { loginSchema } from "@/features/auth/schemas/auth.schema";

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const result = loginSchema.safeParse(values);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      await login(result.data);
      router.push("/browse");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-semibold text-foreground">Log in</h1>

      <Input
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
        required
      />

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Log in"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        No account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
