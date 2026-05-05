import type { Metadata } from "next";
import { ReferContent } from "./refer-content";

export const metadata: Metadata = {
  title: "Refer a Friend",
  description:
    "Know someone buying or selling in the GTA? Refer them to Sankalp and receive a personal thank-you gift when the transaction closes.",
  alternates: { canonical: "https://sankalprealestate.ca/refer" },
};

export default function ReferPage() {
  return <ReferContent />;
}
