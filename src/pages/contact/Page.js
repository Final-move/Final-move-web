import React from "react";
import { PageContainer } from "../../components/general";
import { PageBanner } from "../../components";

const Contact = () => {
  return (
    <PageContainer className={"w-full min-h-screen bg-white"}>
      <PageBanner bgImg={"bg-contact-banner"} />
    </PageContainer>
  );
};

export default Contact;
