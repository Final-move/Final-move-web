import React from "react";
import { PageBanner, PageContainer } from "../../components";
import ContactSection from "./ContactSection";
import MapContainer from "./MapContainer";

const Contact = () => {
  return (
    <PageContainer className={"w-full min-h-screen bg-white"}>
      <PageBanner title={"CONTACT US"} bgImg={"bg-contact-banner"} />

      <ContactSection />

      <MapContainer className={"w-full h-[500px] py-12"} />
    </PageContainer>
  );
};

export default Contact;
