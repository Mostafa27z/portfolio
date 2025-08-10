import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mostafa Osama | Portfolio",
  description: "Personal CV and Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen text-gray-100 transition-colors duration-300 bg-[#0f1624] overflow-x-hidden">
        {/* Radial cyan glow background */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -top-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500 opacity-30 blur-[200px] rounded-full"></div>
          <div className="absolute -bottom-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500 opacity-20 blur-[200px] rounded-full"></div>
        </div>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
