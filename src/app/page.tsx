
"use client";

import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";
import {Icons} from "@/components/icons";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

// Placeholder data for categories and featured books
const categories = [
  {name: "Fiction", icon: "book"},
  {name: "Mystery", icon: "book"},
  {name: "Thriller", icon: "book"},
  {name: "Science Fiction", icon: "book"},
  {name: "Fantasy", icon: "book"},
];

const featuredBooks = [
  {id: 1, title: "The Secret Garden", author: "Frances Hodgson Burnett", imageUrl: "https://picsum.photos/id/10/200/300"},
  {id: 2, title: "Little Women", author: "Louisa May Alcott", imageUrl: "https://picsum.photos/id/11/200/300"},
  {id: 3, title: "Anne of Green Gables", author: "L.M. Montgomery", imageUrl: "https://picsum.photos/id/12/200/300"},
  {id: 4, title: "The Call of the Wild", author: "Jack London", imageUrl: "https://picsum.photos/id/13/200/300"},
];

const quotes = [
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
    author: "Dr. Seuss",
  },
  {
    text: "A book is a dream you hold in your hand.",
    author: "Neil Gaiman",
  },
  {
    text: "“I have always imagined that Paradise will be a kind of library.”",
    author: "Jorge Luis Borges",
  },
];

export default function Home() {
  const {setOpen} = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuote((prevQuote) => {
        const currentIndex = quotes.indexOf(prevQuote);
        const nextIndex = (currentIndex + 1) % quotes.length;
        return quotes[nextIndex];
      });
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Welcome to Adjust Library</CardTitle>
            <TooltipProvider>
              <div className="flex items-center space-x-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                      {darkMode ? <Icons.light/> : <Icons.dark/>}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center">
                    Toggle Dark Mode
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          <CardDescription>Your gateway to a world of books and knowledge.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* Smart Search Bar */}
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for books..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Icons.search className="absolute top-3 right-3 h-5 w-5 text-muted-foreground"/>
          </div>

          {/* Top Categories / Genres Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Top Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category.name} variant="secondary" size="sm">
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Quote of the Day */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Quote of the Day</h3>
            <blockquote className="italic text-muted-foreground">
              "{quote.text}" - {quote.author}
            </blockquote>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>Total Books</CardTitle>
              </CardHeader>
              <CardContent>1,234</CardContent>
            </Card>
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>Members</CardTitle>
              </CardHeader>
              <CardContent>567</CardContent>
            </Card>
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>Daily Issued</CardTitle>
              </CardHeader>
              <CardContent>89</CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="flex flex-wrap gap-2 justify-start">
              <Link href="/admin/login">
                <Button variant="outline" size="sm">admin login</Button>
              </Link>
              <Link href="/user/login">
                <Button variant="outline" size="sm">member login</Button>
              </Link>
              <Link href="/librarians">
                <Button variant="outline" size="sm">librarian info</Button>
              </Link>
            </div>
          </div>

          {/* Featured Books Slider */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Featured Books</h3>
            <div className="flex gap-4 overflow-x-auto">
              {featuredBooks.map((book) => (
                <div key={book.id} className="w-48 flex-shrink-0">
                  <img src={book.imageUrl} alt={book.title} className="rounded-md mb-2 shadow"/>
                  <h4 className="font-semibold">{book.title}</h4>
                  <p className="text-muted-foreground">By {book.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Book Quiz (Optional) */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Mini Book Quiz</h3>
            <p className="text-muted-foreground">Test your literary knowledge!</p>
            <Button variant="link" size="sm">Take the Quiz</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


