import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Wichayut Laorod | Resume",
  description: "Personal resume website of Wichayut Laorod. Learn more about my background, skills, projects, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="">
      
        <Header/>
        <div className="px-[24px] sm:px-[24px] md:px-[50px] lg:px-[90px]">
        {children}
        </div>
        
      </body>
    </html>
  );
}
