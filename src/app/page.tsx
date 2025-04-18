'use client';

import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect, useRef, useState} from "react";
import {Input} from "@/components/ui/input";
import {Icons} from "@/components/icons";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Placeholder data for categories and featured books
const categories = [
  {name: "Fiction 📚", icon: "book"},
  {name: "Mystery 🕵️‍♂️", icon: "book"},
  {name: "Thriller 🔪", icon: "book"},
  {name: "Science Fiction 🚀", icon: "book"},
  {name: "Fantasy 🐉", icon: "book"},
];

const featuredBooks = [
  {id: 1, title: "The Secret Garden 🌸", author: "Frances Hodgson Burnett", imageUrl: "https://picsum.photos/id/10/200/300", summary: "A young girl discovers a magical garden."},
  {id: 2, title: "Little Women 👧", author: "Louisa May Alcott", imageUrl: "https://picsum.photos/id/11/200/300", summary: "The lives of four sisters during the Civil War."},
  {id: 3, title: "Anne of Green Gables 👒", author: "L.M. Montgomery", imageUrl: "https://picsum.photos/id/12/200/300", summary: "An orphan girl finds a home on Prince Edward Island."},
  {id: 4, title: "The Call of the Wild 🐾", author: "Jack London", imageUrl: "https://picsum.photos/id/13/200/300", summary: "A domesticated dog becomes a wild animal during the Klondike Gold Rush."},
  {id: 5, title: "The Hobbit 🧙‍♂️", author: "J.R.R. Tolkien", imageUrl: "https://picsum.photos/id/14/200/300", summary: "A hobbit goes on an adventure to reclaim treasure."},
  {id: 6, title: "Alice's Adventures in Wonderland 🐇", author: "Lewis Carroll", imageUrl: "https://picsum.photos/id/15/200/300", summary: "A girl falls into a fantasy world."},
];

const quotes = [
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. 🚀",
    author: "Dr. Seuss",
  },
  {
    text: "A book is a dream you hold in your hand. 📖✨",
    author: "Neil Gaiman",
  },
  {
    text: "“I have always imagined that Paradise will be a kind of library.” 😇📚",
    author: "Jorge Luis Borges",
  },
];

const testimonials = [
  {
    text: "The library has been an invaluable resource throughout my academic journey. Highly recommended! 👍",
    author: "Alice Smith, Student",
  },
  {
    text: "The librarians are always so helpful and kind. They make finding the right book a breeze! 😊",
    author: "Bob Johnson, Student",
  },
  {
    text: "I love the quiet atmosphere and the vast selection of books. Perfect for studying! 💯",
    author: "Charlie Brown, Student",
  },
];

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleDateString() + ' ' + currentDateTime.toLocaleTimeString();
  return <>{formattedDateTime}</>;
}

interface HomePageProps {
}

export default function Home({}: HomePageProps) {
  const {setOpen} = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [totalBooks, setTotalBooks] = useState(1234);
  const [activeMembers, setActiveMembers] = useState(567);
  const [dailyIssued, setDailyIssued] = useState(89);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTestimonial((prevTestimonial) => {
        const currentIndex = testimonials.indexOf(prevTestimonial);
        const nextIndex = (currentIndex + 1) % testimonials.length;
        return testimonials[nextIndex];
      });
    }, 7000); // Change testimonial every 7 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Carousel Functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (carouselIndex + 1) % featuredBooks.length;
        setCarouselIndex(nextIndex);
        carouselRef.current.scrollTo({
          left: nextIndex * carouselRef.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselIndex]);

  const handleManualScroll = (direction: number) => {
    if (carouselRef.current) {
      const newIndex = (carouselIndex + direction + featuredBooks.length) % featuredBooks.length;
      setCarouselIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="bg-gradient-to-br from-blue-100 to-green-50 shadow-xl">
        <CardHeader>
          {/* Hero Section */}
          <div className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Welcome to Adjust Library! 📚
            </CardTitle>
            <CardDescription className="text-md text-gray-600">
              Unlock the Knowledge of the World. Happy reading! 😊
            </CardDescription>

            {/* Search Bar */}
            <div className="relative mt-6">
              <Input
                type="search"
                placeholder="Quick Search for books..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="rounded-full shadow-md"
              />
              <Icons.search className="absolute top-3 right-3 h-5 w-5 text-gray-500"/>
            </div>

            {/* Advanced Search Filters */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Select onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category"/>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                type="text"
                placeholder="Author"
                value={authorFilter}
                onChange={(e) => setAuthorFilter(e.target.value)}
                className="rounded-md shadow-sm"
              />

              <Input
                type="number"
                placeholder="Year"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="rounded-md shadow-sm"
              />

              <Select onValueChange={setRatingFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Rating"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Star</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setAvailabilityFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Availability"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inStock">In Stock</SelectItem>
                  <SelectItem value="outOfStock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/admin/login">
                <Button variant="outline" size="lg" className="rounded-full text-sm">
                  🔐 admin login
                </Button>
              </Link>
              <Link href="/user/login">
                <Button variant="outline" size="lg" className="rounded-full text-sm">
                  👤 member login
                </Button>
              </Link>
              <Link href="/books">
                <Button variant="outline" size="lg" className="rounded-full text-sm">
                  📄 explore books
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center">
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
        </CardHeader>
        <CardContent className="grid gap-6">

          {/* Top Categories / Genres Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Explore Top Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="secondary"
                  size="sm"
                  className="rounded-full hover:bg-yellow-200 transition-colors"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Quote of the Day */}
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Quote of the Day 🌟</h3>
            <blockquote className="italic text-gray-600">
              "{testimonial.text}" - {testimonial.author}
            </blockquote>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-green-50 shadow-md hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-gray-700">Total Books 📚</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl font-bold text-green-800">{totalBooks}</CardContent>
            </Card>
            <Card className="bg-red-50 shadow-md hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-gray-700">Active Members 🧑‍🎓</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl font-bold text-red-800">{activeMembers}</CardContent>
            </Card>
            <Card className="bg-blue-50 shadow-md hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-gray-700">Daily Issued 📅</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl font-bold text-blue-800">{dailyIssued}</CardContent>
            </Card>
          </div>
            {/* Last Updated */}
            <div className="text-sm text-gray-500">
              Last Updated: <DateTimeDisplay />
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Jump to</h3>
            <div className="flex flex-wrap gap-2 justify-start">
              <Link href="/admin/login">
                <Button variant="outline" size="sm" className="rounded-full text-sm">admin login</Button>
              </Link>
              <Link href="/user/login">
                <Button variant="outline" size="sm" className="rounded-full text-sm">member login</Button>
              </Link>
              <Link href="/librarians">
                <Button variant="outline" size="sm" className="rounded-full text-sm">librarian info</Button>
              </Link>
            </div>
          </div>

         {/* Featured Books Slider */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">New Arrivals ✨</h3>
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x"
            >
              {featuredBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="w-64 flex-shrink-0 rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform snap-start relative"
                >
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-white">
                    <h4 className="font-semibold text-gray-800">{book.title}</h4>
                    <p className="text-gray-600">By {book.author}</p>
                  </div>
                  {/* Hover effect for summary and borrow button */}
                  <div className="absolute inset-0 bg-black/75 text-white p-3 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-sm italic mb-2">{book.summary}</p>
                    <Button size="sm">Borrow</Button>
                  </div>
                </div>
              ))}
            </div>
            {/* Manual scroll buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
              <Button variant="ghost" size="icon" onClick={() => handleManualScroll(-1)}>
                <Icons.arrowRight className="h-6 w-6 rotate-180"/>
              </Button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
              <Button variant="ghost" size="icon" onClick={() => handleManualScroll(1)}>
                <Icons.arrowRight className="h-6 w-6"/>
              </Button>
            </div>
          </div>
        </div>

          {/* Mini Book Quiz (Optional) */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Quick Quiz 🧠</h3>
            <p className="text-gray-600">Test your literary knowledge!</p>
            <Button variant="link" size="sm" className="text-blue-500">Take the Quiz</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
