"use client";

import { useState } from "react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAppSelector } from "@/store/hooks";

export function SettingsForm() {
  const user = useAppSelector((state) => state?.auth?.user);
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">
          Name
        </label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button type="submit">Save changes</Button>

      {saved && <p className="text-sm text-primary">Saved.</p>}
    </form>
  );
}
