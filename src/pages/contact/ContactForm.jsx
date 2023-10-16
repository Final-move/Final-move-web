import React from "react";
import { SectionHeader } from "../../components/general";

const ContactForm = () => {
  const contactSubmit = (e) => e.preventDefault;

  return (
    <form onSubmit={contactSubmit}>
      <SectionHeader title={"Send us a message"} />
    </form>
  );
};

export default ContactForm;
