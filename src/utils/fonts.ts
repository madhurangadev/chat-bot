import { Inter } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const inter = inter_init.variable;
