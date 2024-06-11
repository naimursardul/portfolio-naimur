export default function About() {
  return (
    <div className="flex flex-col gap-6 globPad bg-[--bgSoft] opacity-90">
      <h2 className="text-5xl text-[--text] font-[700]">About</h2>
      <div className="flex gap-3">
        <div className="w-[150px] relative top-3  border-t-2 border-[--btn]"></div>
        <p className="text-[--text] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          illo aut ipsa assumenda aliquam delectus iure et odio quam velit?
          Molestias consectetur veniam doloribus.{" "}
          <span className="text-[--btn]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>{" "}
          Ipsum repellat fugit optio aperiam similique recusandae id repudiandae
          placeat, minima error maiores dolor autem eos.
        </p>
      </div>
    </div>
  );
}
