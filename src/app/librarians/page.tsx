"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { Clock, User } from "lucide-react";

export default function LibrarianInfoPage() {
  const { setOpen } = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const librarians = [
    {
      id: 1,
      name: "Doraemon",
      role: "Head Librarian",
      shiftTime: "Monday to Friday, 9:00 AM – 5:00 PM",
      imageUrl: "https://picsum.photos/id/237/200/300", // Ensure this path is correct
      color: "#1E90FF", // Blue
    },
    {
      id: 2,
      name: "Nobita Nobi",
      role: "Assists with book cataloging",
      shiftTime: "Monday to Friday, 10:00 AM – 4:00 PM",
      imageUrl: "https://picsum.photos/id/238/200/300", // Ensure this path is correct
      color: "#FFD700", // Yellow
    },
    {
      id: 3,
      name: "Shizuka Minamoto",
      role: "Coordinates library events",
      shiftTime: "Monday to Friday, 11:00 AM – 5:00 PM",
      imageUrl: "https://picsum.photos/id/239/200/300", // Ensure this path is correct
      color: "#FF69B4", // Pink
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {librarians.map((librarian) => (
              <div
                key={librarian.id}
                className="border rounded-md p-4"
                style={{ backgroundColor: librarian.color, opacity: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={librarian.imageUrl} alt={librarian.name} />
                    <AvatarFallback>{librarian.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-white">{librarian.name}</h3>
                    <p className="text-white flex items-center gap-1">
                      <User className="h-4 w-4" /> {librarian.role}
                    </p>
                    <p className="text-white flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {librarian.shiftTime}
                    </p>
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

