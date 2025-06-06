import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton} from "@/components/ui/sidebar";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from '@/components/ui/button';
import {DateTimeDisplay} from "@/components/date-time-display";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Adjust Library',
    description: 'Library Management System',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  'use client';
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-secondary text-secondary-foreground p-4 flex justify-around items-center">
              <Link href="/" passHref legacyBehavior>
                <Button variant="ghost" size="sm">
                  🏠 Home
                </Button>
              </Link>
              <Link href="/info" passHref legacyBehavior>
                <Button variant="ghost" size="sm">
                  ℹ️ Info
                </Button>
              </Link>
              {/*<Link href="/help" passHref legacyBehavior>
                <Button variant="ghost" size="sm">
                  🛠 Help
                </Button>
              </Link>*/}
              <Link href="/librarians" passHref legacyBehavior>
                <Button variant="ghost" size="sm">
                  🧑‍💼 Librarian
                </Button>
              </Link>
              <Link href="/admin/login" passHref legacyBehavior>
                <Button variant="ghost" size="sm">
                  🔑 Admin Login
                </Button>
              </Link>
              <Link href="/user/login" passHref legacyBehavior>
                <Button variant="ghost" size="sm">
                  👤 Member Login
                </Button>
              </Link>
              <Link href="/user/register" passHref legacyBehavior>
                <Button variant="ghost" size="sm">
                  ✨ Member Sign Up
                </Button>
              </Link>
              {/*<Button variant="ghost" size="sm">
                🌙 Dark Mode Toggle
              </Button>*/}
              {/* Add more links as needed */}
            </header>

            <div className="flex flex-grow">
              <Sidebar>
                <SidebarContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <Link href="/" passHref legacyBehavior>
                        <SidebarMenuButton>
                          <Icons.home className="mr-2 h-4 w-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/info" passHref legacyBehavior>
                        <SidebarMenuButton>
                          <Icons.help className="mr-2 h-4 w-4" />
                          <span>Info</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/books" passHref legacyBehavior>
                        <SidebarMenuButton>
                          <Icons.bookOpen className="mr-2 h-4 w-4" />
                          <span>Books</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/librarians" passHref legacyBehavior>
                        <SidebarMenuButton>
                          <Icons.user className="mr-2 h-4 w-4" />
                          <span>Librarian</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/admin/login" passHref legacyBehavior>
                        <SidebarMenuButton>
                          <Icons.lock className="mr-2 h-4 w-4" />
                          <span>Admin Login</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/user/login" passHref legacyBehavior>
                        <SidebarMenuButton>
                          <Icons.user className="mr-2 h-4 w-4" />
                          <span>Member Area</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/user/register" passHref legacyBehavior>
                        <SidebarMenuButton>
                          <Icons.plusCircle className="mr-2 h-4 w-4" />
                          <span>Member Sign Up</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarContent>
              </Sidebar>
              {children}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
export { generateMetadata };

