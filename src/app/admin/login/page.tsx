"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect} from "react";

export default function AdminLoginPage() {
  const {setOpen} = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>Access the administration panel.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" placeholder="Your username"/>
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
