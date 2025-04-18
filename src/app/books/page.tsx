"use client";

import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {useSidebar} from "@/components/ui/sidebar";

export default function BookCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const {setOpen} = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const books = [
    {id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien"},
    {id: 2, title: "Pride and Prejudice", author: "Jane Austen"},
    {id: 3, title: "1984", author: "George Orwell"},
    {id: 4, title: "To Kill a Mockingbird", author: "Harper Lee"},
  ];

  const filteredBooks = books.filter((book) => {
    const searchStr = `${book.title} ${book.author}`.toLowerCase();
    return searchStr.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Book Catalog</CardTitle>
          <CardDescription>Browse our extensive collection of books.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input
            type="search"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="grid gap-2">
            {filteredBooks.map((book) => (
              <div key={book.id} className="border rounded-md p-4">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-muted-foreground">By {book.author}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
