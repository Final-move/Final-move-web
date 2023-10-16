import React from "react";
import ContactForm from "./ContactForm";
import { contactPageContact } from "../../data/constant";

const ContactSection = () => {
  return (
    <section className="w-full py-12 grid grid-cols-2 max-md:grid-cols-1 gap-4 text-black">
      <section className="grid grid-cols-1 gap-4">
        {contactPageContact.map((data, index) => (
          <div
            className="bg-yellow-500 w-full p-4 flex items-center gap-4 rounded-lg"
            key={index}
          >
            <p className="bg-black text-yellow-500 p-4 rounded-full">
              {data.icon}
            </p>
            <div>
              <h3 className="font-semibold text-lg">{data.title}</h3>
              <a href={data.url} className="text-base font-medium">
                {data.label}
              </a>
            </div>
          </div>
        ))}
      </section>

      <ContactForm />
    </section>
  );
};

export default ContactSection;
