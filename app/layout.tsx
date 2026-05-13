import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Developer",
  description:
    "Personal portfolio of Alex Morgan, a full-stack developer specializing in React, Next.js, and Node.js. Building elegant digital experiences.",
  keywords: ["developer", "portfolio", "full-stack", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan — Full-Stack Developer",
    description: "Building elegant digital experiences at the intersection of design and engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Developer",
    description: "Building elegant digital experiences at the intersection of design and engineering.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
