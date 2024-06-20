"use client";

import SubmitBtn from "./SubmitBtn";

export default function ContactForm() {
  return (
    <form
      action="#"
      className="max-sm:w-[300px] w-[400px] flex flex-col gap-2 px-5 py-8 bg-[--bgSoft] rounded "
    >
      <h2 className="text-xl font-[600] text-[--text] text-center mb-2">
        Contact now
      </h2>
      <input
        type="email"
        name="email"
        placeholder="john@example.com"
        className="text-sm text-[--text] px-3 py-2 rounded outline-none bg-[--bgSofter]"
      />
      <input
        type="text"
        name="name"
        placeholder="john Doe"
        className="text-sm text-[--text] px-3 py-2 rounded outline-none bg-[--bgSofter]"
      />
      <textarea
        placeholder="Enter your message..."
        rows={5}
        className="text-sm text-[--text] px-3 py-2 rounded outline-none bg-[--bgSofter]"
      />
      <div className="bg-[--btn] hover:opacity-80 text-[--text] font-[500] h-[40px] rounded">
        <SubmitBtn title="Submit" />
      </div>
    </form>
  );
}
