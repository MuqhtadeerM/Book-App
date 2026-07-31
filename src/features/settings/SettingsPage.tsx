import { SettingsForm } from "@/features/settings/components/SettingsForm";

export function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
      <div className="mt-6">
        <SettingsForm />
      </div>
    </div>
  );
}
