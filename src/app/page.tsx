import About from "@/components/About/About";
import ExpSection from "@/components/ExpSection/ExpSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import MySkills from "@/components/MySkills/MySkills";
import Showcase from "@/components/Showcase/Showcase";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <MySkills />
      </div>
      <div id="reviews">
        <ExpSection />
      </div>
      <Showcase />
      <Footer />
    </div>
  );
}
