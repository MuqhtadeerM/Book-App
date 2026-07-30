import { AppShell } from "@/shared/layout";

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Welcome 👋</h1>

        <p className="text-muted-foreground">
          Your book dashboard starts here.
        </p>
      </div>
    </AppShell>
  );
}
