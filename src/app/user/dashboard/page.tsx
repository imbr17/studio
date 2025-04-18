"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UserDashboardPage() {
  const {setOpen} = useSidebar();
  const [issuedBooks, setIssuedBooks] = useState([
    {title: "The Lord of the Rings", returnDate: "2024-08-01", fineWarning: false},
    {title: "Pride and Prejudice", returnDate: "2024-07-25", fineWarning: true},
  ]);
  const [wishlist, setWishlist] = useState([
    {title: "1984"},
    {title: "To Kill a Mockingbird"},
  ]);
  const [readingHistory, setReadingHistory] = useState([
    {title: "The Hobbit", dateRead: "2024-05-20"},
    {title: "The Secret Garden", dateRead: "2024-04-10"},
  ]);
  // Mock user data - replace with actual user data retrieval
  const userData = {
    name: "John Doe",
    membershipDate: "2023-01-15",
    userTier: "Premium",
  };

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  const handleReturnBook = (title: string) => {
    setIssuedBooks(currentBooks => currentBooks.filter(book => book.title !== title));
  };

  const handleRenewBook = (title: string) => {
    setIssuedBooks(currentBooks =>
      currentBooks.map(book =>
        book.title === title ? {...book, returnDate: '2024-09-01'} : book
      )
    );
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Member Area</CardTitle>
          <CardDescription>Welcome to your personalized dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* Welcome Back Section */}
          <div className="grid gap-2">
            <h2 className="text-xl font-semibold">👋 Welcome Back, {userData.name}</h2>
            <p>📅 Membership Date: {userData.membershipDate}</p>
            <p>🏆 User Tier: {userData.userTier}</p>
          </div>

          {/* My Issued Books Section */}
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">📚 My Issued Books</h3>
            <div className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Book</TableHead>
                    <TableHead>Return Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {issuedBooks.map((book) => (
                    <TableRow key={book.title}>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.returnDate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => handleReturnBook(book.title)}>
                          Return
                        </Button>
                        <Button variant="secondary" size="sm" onClick={() => handleRenewBook(book.title)}>
                          Renew
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Wishlist Section */}
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">📝 Wishlist</h3>
            {wishlist.length > 0 ? (
              <ul className="list-disc pl-5">
                {wishlist.map((book, index) => (
                  <li key={index}>{book.title}</li>
                ))}
              </ul>
            ) : (
              <p>No books in wishlist.</p>
            )}
          </div>

          {/* Reading History Section */}
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">🧠 Reading History</h3>
            {readingHistory.length > 0 ? (
              <ul className="list-disc pl-5">
                {readingHistory.map((book, index) => (
                  <li key={index}>
                    {book.title} - Read on: {book.dateRead}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reading history available.</p>
            )}
          </div>

          {/* Notifications Section */}
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">💬 Notifications</h3>
            <p>No new notifications.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
