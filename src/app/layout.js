import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./(Components)/ScrollToTop";
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
  title: "REEDS",
  description: "Reeds",
  icons: {
    icon: "/assets/favicon-reeds.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
