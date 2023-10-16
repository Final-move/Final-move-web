import React from "react";
import { PageContainer } from "../../components/general";
import { PageBanner } from "../../components";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <PageContainer className={"w-full min-h-screen bg-white"}>
      <PageBanner title={"CONTACT US"} bgImg={"bg-contact-banner"} />

      <ContactSection />
    </PageContainer>
  );
};

export default Contact;
