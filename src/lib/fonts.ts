import { Manrope } from "next/font/google";

// Manrope drives both display and body roles (see globals.css :root aliases).
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});
