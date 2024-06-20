import About from "@/components/About/About";
import ExpSection from "@/components/ExpSection/ExpSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import MySkills from "@/components/MySkills/MySkills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <MySkills />
      <ExpSection />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </div>
  );
}
