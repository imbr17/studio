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
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Welcome to Adjust Library</CardTitle>
          </div>
          <CardDescription>Your gateway to a world of books and knowledge.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p>Explore our collection and discover new adventures in reading.</p>
          <div className="flex flex-wrap gap-2 justify-start">
            <Link href="/info">
              <Button size="sm">library info</Button>
            </Link>
            <Link href="/books">
              <Button size="sm">book catalog</Button>
            </Link>
            <Link href="/librarians">
              <Button size="sm">librarian info</Button>
            </Link>
            <Link href="/user/login">
              <Button variant="outline" size="sm">user login</Button>
            </Link>
            <Link href="/admin/login">
              <Button variant="secondary" size="sm">admin login</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    