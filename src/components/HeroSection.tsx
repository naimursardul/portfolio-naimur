import Image from "next/image";
import profileImg from "../../public/profile1.png";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div className="flex max-md:flex-col-reverse items-center justify-center gap-[50px]  globPad bg-[--bg] opacity-80 shadow-[#3b2020] shadow-lg">
      <div className="flex flex-col items-start justify-center gap-4">
        <p className="flex gap-3 items-baseline">
          <span className="text-[--text] font-[400] text-2xl">{"I'M"}</span>{" "}
          <span className="text-[--btn] font-[600] text-5xl">
            Naimur Rahman
          </span>
        </p>
        <h1 className="text-[--text] font-[500] text-2xl">
          MERN Stack & NEXT.JS Developer
        </h1>
        <button className="flex gap-2 items-center justify-center border-[4px] border-[--btn] rounded font-[600] text-xl text-[--btn] hover:text-[--text] hover:bg-[--btn] px-3 py-2">
          <span>Contact me</span> <FaArrowRight />
        </button>
      </div>
      <div className="relative">
        <Image
          src={profileImg}
          alt=""
          className="object-cover rounded-[100%] w-[300px] bg-[--bgSoft] filter brightness-75 contrast-125 border-[4px] border-[--btn]"
        />
      </div>
    </div>
  );
}
