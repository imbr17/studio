"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { Icons } from "@/components/icons";

export default function LibrarianPage() {
  const { setOpen } = useSidebar();
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      availability: true,
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      availability: false,
    },
  ]);
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", tier: "Premium" },
    { id: 2, name: "Bob", email: "bob@example.com", tier: "Student" },
  ]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    availability: true,
  });

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const handleAddBook = () => {
    setBooks([...books, { id: books.length + 1, ...newBook }]);
    setNewBook({ title: "", author: "", genre: "", availability: true });
  };

  const handleRemoveBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="bg-stone-50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Librarian Dashboard</CardTitle>
          <CardDescription>Manage library resources and users.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* Manage Books Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Manage Books</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Genre</TableHead>
                  <TableHead>Availability</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableCell>
                      {book.availability ? "Available" : "Unavailable"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveBook(book.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Add New Book Form */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Add New Book</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  value={newBook.title}
                  onChange={(e) =>
                    setNewBook({ ...newBook, title: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  type="text"
                  id="author"
                  value={newBook.author}
                  onChange={(e) =>
                    setNewBook({ ...newBook, author: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="genre">Genre</Label>
                <Input
                  type="text"
                  id="genre"
                  value={newBook.genre}
                  onChange={(e) =>
                    setNewBook({ ...newBook, genre: e.target.value })
                  }
                />
              </div>
              <Button onClick={handleAddBook}>Add Book</Button>
            </div>
          </div>

          {/* Manage Users Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Manage Users</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.tier}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Warn
                      </Button>
                      <Button variant="destructive" size="sm">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Issue Requests Panel */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Issue Requests</h3>
            <Textarea placeholder="Pending issue requests will appear here." />
          </div>

          {/* Reports Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <Button>Download CSV</Button>
            <Button>Download PDF</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
