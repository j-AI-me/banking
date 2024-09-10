import type { Metadata } from "next";
import "./globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
});


export const metadata: Metadata = {
  title: "tuBanco",
  description:
    "tuBanco es una plataforma de gestión de finanzas personales moderna y fácil de usar que te permite controlar tus gastos, ahorrar y planificar tus finanzas de manera eficiente.",
  icons: {
    icon: "/icons/logo.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
