import type { Metadata } from "next";
import "./globals.css";
// import Testimonial from "@/components/sections/testimonial";
// import BookingProcess from "@/components/sections/booking";
// import PriceSection from "@/components/sections/prices";
import { Noto_Sans_KR } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import SideFloat from "@/components/side-float";

export const metadata: Metadata = {
  title: "루이스키",
  description: "Generated by create next app",
};

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`antialiased relative ${noto.className} bg-gradient-to-br lg:bg-gradient-to-r from-[#F6FBFE] to-[#E4F2FB]`}
      >
        {children}
        <SideFloat />
        <GoogleTagManager gtmId="G-GZK0WN0R05" />
        {/* <Testimonial />
        <BookingProcess />
        <PriceSection /> */}
      </body>
    </html>
  );
}
