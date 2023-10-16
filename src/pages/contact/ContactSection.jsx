import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full grid text-black">
      <div className="grid grid-flow-col gap-4">
        <div className="w-full h-full grid gap-4">
          <h3 className="font-semibold text-base">PHONE</h3>
          <p className="text-yellow-500 font-medium text-xl">+(234)354-1234</p>
        </div>
        <div className="w-full h-full grid gap-4">
          <h3 className="font-semibold text-base">ADDRESS</h3>
          <p className="text-sm font-medium">Lagos, Nigeria</p>
        </div>
        <div className="w-full h-full grid gap-4">
          <h3 className="font-semibold text-base">EMAIL</h3>
          <p className="text-sm font-medium">info@signfireman.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
