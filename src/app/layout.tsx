import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { I18nProvider } from "@/components/providers/I18nProvider";
import AOSInit from "@/components/providers/AOSInit";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Wichayut Laorod | Full Stack Developer",
  description:
    "Full Stack Developer specializing in scalable web applications, microservices architecture, and cloud-native systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <I18nProvider>
          <ThemeProvider>
            <AOSInit />
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
