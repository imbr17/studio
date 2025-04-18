"use client";

import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect} from "react";

export default function Home() {
  const {setOpen} = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Adjust Library</CardTitle>
          <CardDescription>Your gateway to a world of books and knowledge.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p>Explore our collection and discover new adventures in reading.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/info">
              <Button>Library Info</Button>
            </Link>
            <Link href="/books">
              <Button>Book Catalog</Button>
            </Link>
            <Link href="/librarians">
              <Button>Librarian Info</Button>
            </Link>
            <Link href="/user/login">
              <Button variant="outline">User Login</Button>
            </Link>
            <Link href="/admin/login">
              <Button variant="secondary">Admin Login</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
