"use client";

import Image from "next/image";
import { useState } from "react";
import profileImg from "../../public/profile1.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import ContactForm from "./ContactForm";
import { MdCancel } from "react-icons/md";

const socialIcons: { icon: any; link: string }[] = [
  {
    icon: <FaLinkedin className="text-[#0077B5]" />,
    link: "https://www.linkedin.com/in/naimursardul",
  },
  {
    icon: <FaGithub className="text-[#838383]" />,
    link: "https://github.com/naimursardul",
  },
  {
    icon: (
      <IoIosMail className=" bg-[#59B7E3] p-[3px] text-[white] rounded-full" />
    ),
    link: "https://github.com/naimursardul",
  },
  {
    icon: <FaWhatsappSquare className="text-[#0CC143] " />,
    link: "+8801407348304",
  },
];

export default function HeroSection() {
  const [popUp, setPopUp] = useState<true | false>(false);

  return (
    <div>
      <div className="flex max-md:flex-col-reverse items-center justify-center gap-[50px] globPad bg-[--bg] opacity-80 shadow-[#3b2020] shadow-lg">
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
          <button
            onClick={() => setPopUp(!popUp)}
            className="flex gap-2 items-center justify-center border-[4px] border-[--btn] rounded font-[600] text-xl text-[--btn] hover:text-[--bg] hover:bg-[--btn] px-3 py-2"
          >
            <span>Contact me</span> <FaArrowRight />
          </button>
          <div className="flex gap-4 mt-2">
            {socialIcons?.map((icon, i) => (
              <a
                key={i}
                href={`${icon?.link}`}
                target="_blank"
                className="text-3xl cursor-pointer hover:opacity-80"
              >
                {icon?.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-2 text-lg font-[500]">
            <span className="text-[--btn]">Call now:</span>
            <span className="text-[--text]">+8801407348304</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={profileImg}
            alt=""
            className="object-cover rounded-[100%] w-[300px] bg-[--bgSoft] filter brightness-75 contrast-125 border-[4px] border-[--btn]"
          />
        </div>
      </div>

      {popUp && (
        <div>
          <div className="fixed top-0 left-0 z-20 h-screen w-screen bg-[black] opacity-85"></div>
          <div className="fixed z-30 top-[50%] left-[50%] form-slide-bottom">
            <button
              className="z-40 fixed top-2 right-2 text-3xl text-[--btn]"
              onClick={() => setPopUp(false)}
            >
              <MdCancel />
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}
