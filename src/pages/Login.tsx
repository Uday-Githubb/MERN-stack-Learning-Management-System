import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
    toast({ title: "Welcome back", description: `Signed in as ${email}` });
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-card border rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Log in</h1>
        <label className="block text-sm mb-2">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-4 bg-background"
          aria-label="email"
          placeholder="student@example.com"
        />
        <label className="block text-sm mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-6 bg-background"
          aria-label="password"
          placeholder="••••••••"
        />
        <Button variant="default" size="lg" type="submit" className="w-full">Sign in</Button>
      </form>
    </main>
  );
}
