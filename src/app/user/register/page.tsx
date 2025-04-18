"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function UserRegisterPage() {
  const {setOpen} = useSidebar();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const handleRegister = async () => {
    // Basic validation
    if (!email || !password || !confirmPassword) {
      alert("Please enter all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // In a real application, you would authenticate against a backend service.
    // For this example, we'll simulate a successful registration.
    const success = true; // Assume successful registration

    if (success) {
      // Redirect to the user dashboard upon successful registration
      router.push("/user/dashboard");
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">User Registration</CardTitle>
          <CardDescription>Create a new account.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleRegister}>Register</Button>
        </CardContent>
      </Card>
    </div>
  );
}

