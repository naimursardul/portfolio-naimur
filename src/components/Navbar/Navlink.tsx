"use client";

import { LinkType } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ link }: { link: LinkType }) {
  const pathName: string = usePathname();
  console.log(pathName);
  return (
    <Link
      href={link?.path}
      className={`font-[400] hover:text-[--btn] text-lg ${
        pathName === link?.path ? "text-[--btn]" : "text-[--text]"
      }`}
    >
      {link?.name}
    </Link>
  );
}
