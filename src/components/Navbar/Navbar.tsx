import { LinkType } from "@/lib/types";
import Navlink from "./Navlink";

export default function Navbar() {
  const links: LinkType[] = [
    { name: "About", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];
  return (
    <div className="bg-[--bg] opacity-80  globPad py-[30px] ">
      <ul className="flex gap-8 justify-center">
        {links?.map((link, i) => (
          <Navlink key={i} link={link} />
        ))}
      </ul>
    </div>
  );
}
