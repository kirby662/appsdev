import { AuthFormHeader } from "@/components/features/auth/auth-form-header";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { SignupForm } from "@/components/features/auth/signup-form";

export default function SignupPage() {
  return (
    <Card className="rounded-2xl border-0 bg-paper p-6 shadow-2xl shadow-ink/40 sm:p-8 [&_input]:py-3">
      <AuthFormHeader title="Create your account" description="A little inspiration for your everyday cooking." />

      <SignupForm />

      <Link className="mt-6 block text-center text-sm font-medium text-cobalt underline underline-offset-4 hover:text-cobalt-deep" to={"/auth/login"}>
        Already have an account? Sign in
      </Link>
    </Card>
  );
}