// Shared branding for the login and signup pages.
export function AuthHeader() {
  return (
    <header className="mb-8 text-center">
      <p className="mb-3 text-sm font-medium text-butter">Your kitchen companion</p>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Recipe Book</h1>
      <p className="mt-3 text-sm text-white/80">Keep your favorite meals in one place.</p>
    </header>
  );
}