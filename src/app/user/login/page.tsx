"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect} from "react";

export default function UserLoginPage() {
  const {setOpen} = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

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
            <Input type="email" id="email" placeholder="Your email"/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Your password"/>
          </div>
          <Button>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}
