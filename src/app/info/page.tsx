"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useSidebar} from "@/components/ui/sidebar";
import {useEffect} from "react";

export default function LibraryInfoPage() {
  const {setOpen} = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Library Information</CardTitle>
          <CardDescription>Learn about our mission, history, and contact details.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p>
            Our mission is to provide access to knowledge and promote lifelong learning within our
            community.
          </p>
          <p>
            Founded in 1950, our library has been a cornerstone of education and culture for
            generations.
          </p>
          <p>Contact us at: info@adjustlibrary.com or (555) 123-4567</p>
        </CardContent>
      </Card>
    </div>
  );
}
