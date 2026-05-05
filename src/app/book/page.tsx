import type { Metadata } from "next";
import { BookContent } from "./book-content";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a one-on-one consultation with Sankalp. Whether buying, selling, or investing in the GTA — let's start with a conversation.",
  alternates: { canonical: "https://sankalprealestate.ca/book" },
};

export default function BookPage() {
  return <BookContent />;
}
