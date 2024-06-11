import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const skills: any = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    color: "yellow",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#DE4B25",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#0B70B2",
  },
];

export default function MySkills() {
  return (
    <div className="flex flex-col items-center gap-8 globPad bg-[--bgSoft]">
      <h2 className="text-5xl font-[700] text-[--text]">My Skills</h2>
      <div className="flex flex-wrap gap-8">
        {skills.map((skill: any, i: any) => (
          <div
            key={i}
            className="w-[150px] h-[150px] flex flex-col items-center justify-center gap-4 bg-[--bgSofter] rounded-lg"
          >
            <div className={`text-5xl text-[${skill?.color}]`}>
              {skill?.icon}
            </div>
            <p className="text-xl text-[--text] font-[500] ">{skill?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
