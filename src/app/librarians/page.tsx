"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect} from "react";

export default function LibrarianInfoPage() {
  const {setOpen} = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const librarians = [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice.smith@adjustlibrary.com",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob.johnson@adjustlibrary.com",
      imageUrl: "https://picsum.photos/id/238/200/300",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Librarian Information</CardTitle>
          <CardDescription>Meet our dedicated team of librarians.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {librarians.map((librarian) => (
              <div key={librarian.id} className="border rounded-md p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={librarian.imageUrl} alt={librarian.name}/>
                    <AvatarFallback>{librarian.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{librarian.name}</h3>
                    <p className="text-muted-foreground">{librarian.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
