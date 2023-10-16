import React from "react";

const ContactForm = () => {
  const contactSubmit = (e) => e.preventDefault;

  return <form onSubmit={contactSubmit}></form>;
};

export default ContactForm;
