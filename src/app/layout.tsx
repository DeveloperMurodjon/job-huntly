import type { Metadata } from "next";
import { Epilogue, Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Footer, Header, Providers } from "@/components/index";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Huntly",
  description: "Job vacancy web site for developers and companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${epilogue.variable} ${redHat.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
