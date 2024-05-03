import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DjangoBnb",
  description: "Generated by Ata Xan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <div>
      <h1>Welcome to DjangoBnb</h1>
      <p>Generated by Ata Xan</p>
    </div>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">
          {children}
        </div>
        
        <Modal label="Modal test" content={content} isOpen={false}/>
      </body>
      
    </html>
  );
}
