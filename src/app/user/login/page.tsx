"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function UserLoginPage() {
  const {setOpen} = useSidebar();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // In a real application, you would authenticate against a backend service.
    // For this example, we'll simulate a successful login.
    // Simulate authentication (replace with actual authentication logic)
    const success = true; // Assume successful authentication

    if (success) {
      // Redirect to the user dashboard upon successful login
      router.push("/user/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">User Login</CardTitle>
          <CardDescription>Access your personalized account.</CardDescription>
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
          <Button onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}
