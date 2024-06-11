import About from "@/components/About/About";
import HeroSection from "@/components/HeroSection";
import MySkills from "@/components/MySkills/MySkills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <MySkills />
    </div>
  );
}
