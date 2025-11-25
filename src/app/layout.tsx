import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Bhandari-Portfolio",
  description:
    "Arjun Bhandari – Freelance Full-Stack Developer specializing in modern web & mobile applications using React, Node.js,React-Native,Expo,Next.js and AWS. With over 5 years of experience delivering user-friendly, high-performance digital solutions for startups and businesses, I turn ideas into scalable products that drive growth and engagement. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
