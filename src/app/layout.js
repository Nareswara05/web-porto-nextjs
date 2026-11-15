import Navbar from "@/components/navbar";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/footer";
import { AppProvider } from "@/lib/context";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "NARESWARA // BRUTALIST PORTFOLIO",
  description:
    "Nareswara Maulana Aletha Alhaq — Fullstack Developer, UI/UX Designer & Project Manager Portfolio",
  icons: {
    icon: "/favicon-brutal.png",
    shortcut: "/favicon-brutal.png",
    apple: "/favicon-brutal.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
