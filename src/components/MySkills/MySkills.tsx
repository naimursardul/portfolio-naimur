import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import NodeJsIcon from "../../../public/node-js.png";
import NextJsIcon from "../../../public/nextjs.jpeg";
import Image from "next/image";

const skills: any = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-[yellow]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-[#DE4B25]" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-[#0B70B2]" />,
  },
  {
    name: "Node.js",
    icon: <Image src={NodeJsIcon} alt="" height={50} width={50} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-[black] bg-white rounded-full p-2" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#00ED64] bg-black p-2 rounded-full " />,
  },
  {
    name: "React",
    icon: <FaReact className="text-[#5ED3F3] " />,
  },
  {
    name: "Next.js",
    icon: (
      <Image
        src={NextJsIcon}
        alt=""
        width={50}
        height={50}
        className="rounded-full"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#5AC9F9] " />,
  },
];

export default function MySkills() {
  return (
    <div className="flex flex-col items-center gap-8 globPad bg-[--bgSoft]">
      <h2 className="text-5xl font-[700] text-[--text]">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill: any, i: any) => (
          <div
            key={i}
            className="w-[200px] max-md:w-[120px] h-[200px] max-md:h-[120px] flex flex-col items-center justify-center gap-4 bg-[--bgSofter] rounded-lg"
          >
            <div className="text-5xl">{skill?.icon}</div>
            <p className="text-md max-sm:text-sm text-[--text] font-[500] ">
              {skill?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
