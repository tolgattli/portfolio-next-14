import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tolga | Front-End Developer",
  description: "Hi, I'm Tolga. A Front-End Developer from Turkey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background bg-neutral-50 font-sans antialiased transition-colors duration-200 ease-in dark:bg-neutral-950",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        >
          <Navbar />
          <main className="w-10/12">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
