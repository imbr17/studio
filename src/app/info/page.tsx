"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, History, BookOpenCheck } from "lucide-react";

export default function LibraryInfoPage() {
  const { setOpen } = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="container mx-auto py-10">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Library Information
          </CardTitle>
          <CardDescription>
            Learn about our mission, history, and contact details.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* About the Library */}
          <section>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <History className="h-5 w-5" />
              About ADUST Library
            </h2>
            <Separator className="my-2" />
            <p className="text-gray-700">
              Establishment: Founded in 2004, the ADUST Library has been serving
              the information and research needs of students and faculty members.
            </p>
            <p className="text-gray-700">
              Collection: Over 30,000+ books, 1,000+ e-books, 600+ print
              periodicals, and 1,500+ theses/reports.
            </p>
            <p className="text-gray-700">
              Services: Reading rooms, reference services, e-books &amp;
              e-journals access, internet facilities, lending services, and
              Wi-Fi connectivity.
            </p>
          </section>

          {/* Rules and Policies */}
          <section>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <BookOpenCheck className="h-5 w-5" />
              Rules &amp; Policies
            </h2>
            <Separator className="my-2" />
            <Tabs defaultValue="borrowing" className="w-full">
              <TabsList>
                <TabsTrigger value="borrowing">Borrowing</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
                <TabsTrigger value="fines">Fines</TabsTrigger>
              </TabsList>
              <TabsContent value="borrowing">
                <p className="text-gray-700">
                  Members can borrow up to 5 books at a time. Borrowing period
                  is 2 weeks.
                </p>
              </TabsContent>
              <TabsContent value="returns">
                <p className="text-gray-700">
                  Books must be returned on or before the due date. Returns can
                  be made at the front desk during opening hours.
                </p>
              </TabsContent>
              <TabsContent value="fines">
                <p className="text-gray-700">
                  A fine of $1 per day will be charged for overdue books.
                </p>
              </TabsContent>
            </Tabs>
          </section>

          {/* Library Timetable */}
          <section>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Library Timetable
            </h2>
            <Separator className="my-2" />
            <p className="text-gray-700">Monday to Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Contact Information
            </h2>
            <Separator className="my-2" />
            <p className="text-gray-700">
              Address: 123 Library Street, Anytown, USA
            </p>
            <p className="text-gray-700">
              Email: info@adjustlibrary.com
            </p>
            <p className="text-gray-700">
              Phone: (555) 123-4567
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
