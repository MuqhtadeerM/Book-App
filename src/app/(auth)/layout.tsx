interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-sm rounded-[var(--radius)] border bg-card p-8 shadow-[var(--shadow-md)]">
        {children}
      </div>
    </div>
  );
}
