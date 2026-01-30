import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridianix",
  metadataBase: new URL("https://meridianix.io"),
  openGraph: {
    title: "Meridianix",
    url: "https://meridianix.io",
    siteName: "Meridianix",
    images: [
      {
        url: "/img/pfp.jpg",
        width: 400,
        height: 400,
        alt: "Meridianix",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Meridianix",
    images: ["/img/pfp.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
