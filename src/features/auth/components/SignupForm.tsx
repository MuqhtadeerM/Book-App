"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { signupSchema } from "@/features/auth/schemas/auth.schema";

export function SignupForm() {
  const router = useRouter();
  const { signup } = useAuth();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const result = signupSchema.safeParse(values);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      await signup(result.data);
      router.push("/browse");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-semibold text-foreground">
        Create an account
      </h1>

      <Input
        placeholder="Name"
        value={values.name}
        onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        required
      />
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
      <Input
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={(e) =>
          setValues((v) => ({ ...v, confirmPassword: e.target.value }))
        }
        required
      />

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Sign up"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Log in
        </Link>
      </p>
    </form>
  );
}
