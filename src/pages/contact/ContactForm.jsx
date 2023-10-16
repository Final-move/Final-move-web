import React from "react";
import { SectionHeader } from "../../components/general";
import { MoveRight } from "lucide-react";

const ContactForm = () => {
  const contactSubmit = (e) => e.preventDefault;

  return (
    <form
      onSubmit={contactSubmit}
      className="grid gap-8 items-start py-12 px-4 border border-yellow-500 rounded-lg"
    >
      <SectionHeader title={"Send us a message"} />

      <section className="w-full grid gap-4">
        <div className="w-full relative">
          <label className="absolute top-1/2 -translate-y-1/2 left-4 text-yellow-500 text-base font-medium">
            Name
          </label>
          <input
            type="text"
            className="w-full h-12 p-4 bg-transparent border border-yellow-500 rounded-lg"
          />
        </div>
        <div className="w-full relative">
          <label className="absolute top-1/2 -translate-y-1/2 left-4 text-yellow-500 text-base font-medium">
            Subject
          </label>
          <input
            type="text"
            className="w-full h-12 p-4 bg-transparent border border-yellow-500 rounded-lg"
          />
        </div>
        <div className="w-full relative">
          <label className="absolute top-4 left-4 text-yellow-500 text-base font-medium">
            Message
          </label>
          <textarea
            type="text"
            className="w-full h-32 p-4 bg-transparent border border-yellow-500 rounded-lg resize-none"
          />
        </div>
        <div className="place-self-end">
          <button className="py-2 px-4 bg-yellow-500 text-black text-base font-medium rounded-lg flex items-center gap-2">
            Send <MoveRight />
          </button>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;
