import { LinkType } from "@/lib/types";
import Navlink from "./Navlink";

export default function Navbar() {
  const links: LinkType[] = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Reviews", path: "#reviews" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <div className="h-full w-full bg-[#333333] flex items-center justify-center ">
      <ul className="flex gap-8 justify-center ">
        {links?.map((link, i) => (
          <Navlink key={i} link={link} />
        ))}
      </ul>
    </div>
  );
}
