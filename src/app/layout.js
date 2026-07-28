import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import Footer from "./(Components)/Footer";
import Header from "./(Components)/Header";
import "./(Css)/index.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reeds",
  description: "Reeds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ReactLenis root>
          <Header />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
