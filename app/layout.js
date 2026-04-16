import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata = {
  title: "Marino Castro | New Jersey Real Estate Agent And Investor",
  description:
    "Real estate guidance, listing strategy, and direct-sale solutions with Marino Castro in New Jersey.",
  metadataBase: new URL("https://marino-castro-realtor.vercel.app")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
