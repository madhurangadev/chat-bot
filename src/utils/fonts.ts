import { Playfair_Display, Inter, Nunito_Sans, Ubuntu_Mono } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const ubuntu_mono_init = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
});

const nunito_sans_init = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const inter = inter_init.variable;
export const ubuntu_mono = ubuntu_mono_init.variable;
export const nunito = nunito_sans_init.variable;
