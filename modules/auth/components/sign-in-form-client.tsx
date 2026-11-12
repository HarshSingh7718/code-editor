"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", { email, password, redirectTo: "/" });
  };

  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <CardDescription>Sign in to pick up where you left off</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-1/2"
              onClick={() => signIn("github", { redirectTo: "/" })}
            >
              GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-1/2"
              onClick={() => signIn("google", { redirectTo: "/" })}
            >
              Google
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            New here?{" "}
            <Link href="/auth/sign-up" className="text-primary underline">
              Create an account
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
