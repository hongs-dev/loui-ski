import HeroSection from "@/components/hero-section";
import { MAIN_BG_URL } from "@/constants/ImageUrls";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <HeroSection />
      <section className="col-span-1">
        <Image
          src={MAIN_BG_URL}
          width={4032}
          height={3024}
          alt="main-bg"
          className="h-full object-cover"
        />
      </section>
    </div>
  );
}
