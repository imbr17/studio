"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect} from "react";
import {Button} from "@/components/ui/button";

export default function UserDashboardPage() {
  const {setOpen} = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  // Mock user data - replace with actual user data retrieval
  const userData = {
    name: "John Doe",
    membershipDate: "2023-01-15",
    userTier: "Premium",
  };

  const issuedBooks = [
    {title: "The Lord of the Rings", returnDate: "2024-08-01", fineWarning: false},
    {title: "Pride and Prejudice", returnDate: "2024-07-25", fineWarning: true},
  ];

  const wishlist = [
    {title: "1984"},
    {title: "To Kill a Mockingbird"},
  ];

  const readingHistory = [
    {title: "The Hobbit", dateRead: "2024-05-20"},
    {title: "The Secret Garden", dateRead: "2024-04-10"},
  ];

  return (
    <div className="container mx-auto py-10">
      <Card>
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
            {issuedBooks.length > 0 ? (
              <ul className="list-disc pl-5">
                {issuedBooks.map((book, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>
                      {book.title} - Return Date: {book.returnDate}
                      {book.fineWarning && (
                        <span className="text-red-500"> - Fine Warning!</span>
                      )}
                    </span>
                    <div>
                      <Button variant="outline" size="sm">
                        Return
                      </Button>
                      <Button variant="secondary" size="sm">
                        Renew
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No books currently issued.</p>
            )}
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
