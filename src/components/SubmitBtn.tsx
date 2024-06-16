"use client";

import { useFormStatus } from "react-dom";
import Loader from "./Loader";

export default function SubmitBtn({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="w-full h-full flex justify-center items-center ">
      {pending ? <Loader /> : <span>{title}</span>}
    </button>
  );
}
