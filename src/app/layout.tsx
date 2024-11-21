// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "Pisomka1-alex-petrovic",
  description: "Created by me A. R. Petrovic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style= {{margin: '0% 98% 0% 0%'}}>
            <Menu /> {/* Add the Menu component here */}
            </div>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}


