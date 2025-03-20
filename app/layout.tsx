import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/utils/session-provider";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import I18nProvider from "@/components/i18n-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calorie Counter",
  description: "A simple calorie counter app...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} antialiased`}>
          <I18nProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main className="pt-16">{children}</main>
            </ThemeProvider>
          </I18nProvider>
        </body>
      </html>
    </AuthProvider>
  );
}