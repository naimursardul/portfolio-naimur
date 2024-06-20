import { FaQuoteRight } from "react-icons/fa6";

export default function Review() {
  return (
    <div className="flex flex-col justify-between gap-2 bg-[--bg] opacity-85 px-6 py-5 rounded-lg ">
      <FaQuoteRight className="text-3xl text-[--btn]" />
      <p className="text-[--textSoft]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
        commodi voluptas inventore assumenda iste nihil aliquam quia, suscipit
        delectus natus.
      </p>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-[--text]">Sayed Mahmud</h3>
        <p className="text-[--text]">Executive Officer, Coders Villa</p>
      </div>
    </div>
  );
}
