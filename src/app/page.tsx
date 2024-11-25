import MainImage from "@/components/main-bg";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <HeroSection />
      <MainImage />
    </div>
  );
}
