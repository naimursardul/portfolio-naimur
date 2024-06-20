import Image from "next/image";
import project1 from "../../../public/project1.png";
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";

export default function Showcase() {
  return (
    <div className="flex flex-col gap-8 bg-[--bgSofter] globPad opacity-85">
      <div className="flex flex-col gap-3 ">
        <h2 className="text-4xl font-bold text-[--text] text-center">
          Our Exceptional Portfolio
        </h2>
        <p className="text-[--text] text-center">
          As the best web development company in Bangladesh, our skilled
          designers and developers excel in diverse platforms, creating
          solutions beyond traditional web design. From company and e-commerce
          sites to buying house platforms, news portals, blogs, and more, we're
          your trusted choice. Explore our exceptional portfolio for insights
          into our diverse capabilities.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <Image
          src={project1}
          alt=""
          className="w-[300px] rounded-lg shadow-lg shadow-[--bg]"
        />
        <Image
          src={project4}
          alt=""
          className="w-[300px] rounded-lg shadow-lg shadow-[--bg]"
        />
        <Image
          src={project2}
          alt=""
          className="w-[300px] rounded-lg shadow-lg shadow-[--bg]"
        />
        <Image
          src={project3}
          alt=""
          className="w-[300px] rounded-lg shadow-lg shadow-[--bg]"
        />
        <Image
          src={project2}
          alt=""
          className="w-[300px] rounded-lg shadow-lg shadow-[--bg]"
        />
        <Image
          src={project4}
          alt=""
          className="w-[300px] rounded-lg shadow-lg shadow-[--bg]"
        />
      </div>
    </div>
  );
}
