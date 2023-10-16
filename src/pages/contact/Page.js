import React from "react";
import { PageContainer } from "../../components/general";
import { PageBanner } from "../../components";
import ContactSection from "./ContactSection";
import MapContainer from "./MapContainer";

const Contact = () => {
  return (
    <PageContainer className={"w-full min-h-screen bg-white"}>
      <PageBanner title={"CONTACT US"} bgImg={"bg-contact-banner"} />

      <ContactSection />

      <MapContainer />
    </PageContainer>
  );
};

export default Contact;
