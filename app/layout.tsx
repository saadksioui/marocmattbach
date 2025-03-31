import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Maroc Mattbach - Authentic Moroccan Catering",
  description: "Experience the rich flavors of Morocco with Maroc Mattbach. Explore our authentic catering services, traditional dishes, and exquisite Moroccan hospitality.",
  keywords: [
    "Moroccan Catering",
    "Maroc Mattbach",
    "Traditional Moroccan Food",
    "Catering Services",
    "Authentic Moroccan Cuisine",
    "Tagine",
    "Moroccan Tea",
    "Halal Catering",
  ],
  openGraph: {
    title: "Maroc Mattbach - Authentic Moroccan Catering",
    description:
      "Enjoy delicious Moroccan cuisine with Maroc Mattbach. Perfect for events, weddings, and special occasions.",
    url: "https://marocmattbach.com",
    siteName: "Maroc Mattbach",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
