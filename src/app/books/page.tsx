"use client";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Science Fiction",
  "Fantasy",
];

const books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    availability: true,
    imageUrl: "https://picsum.photos/id/101/200/300",
    summary: "An epic high-fantasy novel by English author J. R. R. Tolkien.",
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    availability: false,
    imageUrl: "https://picsum.photos/id/102/200/300",
    summary:
      "A romantic novel of manners by Jane Austen, published in 1813.",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    availability: true,
    imageUrl: "https://picsum.photos/id/103/200/300",
    summary: "A dystopian novel by George Orwell published in 1949.",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    availability: true,
    imageUrl: "https://picsum.photos/id/104/200/300",
    summary:
      "A novel by Harper Lee published in 1960 about a young girl in the South.",
  },
];

export default function BookCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setOpen } = useSidebar();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const filteredBooks = books.filter((book) => {
    const searchStr = `${book.title} ${book.author}`.toLowerCase();
    const categoryMatch =
      categoryFilter === "" || book.category === categoryFilter;
    const availabilityMatch =
      availabilityFilter === "" ||
      (availabilityFilter === "available" && book.availability) ||
      (availabilityFilter === "unavailable" && !book.availability);
    return (
      searchStr.includes(searchQuery.toLowerCase()) &&
      categoryMatch &&
      availabilityMatch
    );
  });

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Book Catalog</CardTitle>
          <CardDescription>
            Explore our extensive collection of books.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* Search Input */}
          <Input
            type="search"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <Select onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={setAvailabilityFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="unavailable">Unavailable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="border rounded-md p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-48 object-cover mb-2 rounded-md"
                />
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-muted-foreground">By {book.author}</p>
                <p className="text-sm mt-2">{book.summary}</p>
                {book.availability ? (
                  <Button size="sm" className="mt-2">
                    Request
                  </Button>
                ) : (
                  <div className="text-red-500 mt-2">Unavailable</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
