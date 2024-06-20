import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

import { IoIosMail } from "react-icons/io";

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
  {
    icon: <FaFacebook className="text-[#0664FC] " />,
    link: "https://facebook.com/naimursardul",
  },
  {
    icon: (
      <BiLogoTelegram className="text-[white] bg-[#2EA2DC] p-[6px] rounded-full " />
    ),
    link: "https://facebook.com/naimursardul",
  },
];

export default function Footer() {
  return (
    <div className=" bg-[--bg] flex flex-col justify-between items-center opacity-80">
      <div className="globPad flex flex-col items-center gap-3">
        <h2 className=" text-[--btn]  font-bold">Contacts</h2>

        <div className="flex flex-wrap gap-6 text-[--text]">
          {socialIcons?.map((icon, i) => (
            <a
              key={i}
              href={`${icon?.link}`}
              target="_blank"
              className="text-4xl cursor-pointer hover:opacity-80"
            >
              {icon?.icon}
            </a>
          ))}
        </div>
        <div className="flex gap-2  font-[500]">
          <span className="text-[--btn]">Call now:</span>
          <span className="text-[--text]">+8801407348304</span>
        </div>
      </div>
      <small className="text-[12px] text-[--text] mb-3 ">
        @All rights reserved by naimursardul.com
      </small>
    </div>
  );
}
