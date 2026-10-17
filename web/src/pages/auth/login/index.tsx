import { AuthFormHeader } from "@/components/features/auth/auth-form-header";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <Card className="rounded-2xl border-0 bg-paper p-6 shadow-2xl shadow-ink/40 sm:p-8 [&_input]:py-3">
      {/* The page owns its presentation; the feature handles form state and submission. */}
      <AuthFormHeader title="Welcome back" description="Sign in to find your next favorite meal." />

      <LoginForm />

      <Link className="mt-6 block text-center text-sm font-medium text-cobalt underline underline-offset-4 hover:text-cobalt-deep" to={"/auth/signup"}>
        New here? Create an account
      </Link>
    </Card>
  );
}
