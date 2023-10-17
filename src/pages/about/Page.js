import React from "react";
import { PageContainer } from "../../components/general";
import { PageBanner } from "../../components";
import Img from "../../components/optimization/Img";
import img1 from "../../assets/media/images/special-teaching.jpg";

const About = () => {
  return (
    <PageContainer className={"bg-white min-h-screen"}>
      <PageBanner bgImg={"bg-about-banner"} title={"ABOUT"} />

      <section className="w-full py-12 text-center text-black grid gap-4 place-content-center">
        <Img
          src={img1}
          alt="Sign Fireman in a green suit"
          className={"w-full max-w-lg mx-auto"}
        />

        <h3 className="text-xl font-semibold font-montserrat">
          About Sign Fireman
        </h3>

        <p className="text-base font-medium max-w-3xl text-center">
          Mauris id sagittis ipsum, a condimentum odio. Duis rhoncus tortor non
          dolor ultricies varius dapibus a quam. Aenean eleifend odio id ante
          fermentum semper. Nullam sollicitudin ipsum nec maximus hendrerit.
          Fusce sodales metus vel risus faucibus varius sed id justo. Phasellus
          risus neque, euismod ut euismod quis, aliquam vitae nisl. Sed sagittis
          tortor consectetur lacinia ultrices. Nunc hendrerit imperdiet
          facilisis. Quisque tortor risus, faucibus auctor aliquet ac, sagittis
          vitae turpis. Vestibulum porttitor nunc vitae efficitur rhoncus. Nulla
          non turpis sed nulla luctus tempus. Morbi non ligula sit amet risus
          lobortis luctus at ut nisi. Sed mollis, sem in bibendum faucibus,
          justo dui maximus sapien, ac scelerisque augue nibh eget erat. Mauris
          congue vel velit eget euismod. Phasellus sit amet eros a est semper
          fermentum non ut lorem. Donec sollicitudin risus at ex ullamcorper
          posuere. Vivamus luctus metus quis eleifend fringilla. Etiam
          scelerisque vulputate dui eget consectetur. Phasellus eu nisl eget
          urna rhoncus gravida non in leo. Ut ut nunc justo. Cras vel commodo
          turpis. Nulla ligula justo, porttitor vel pellentesque et, ultrices
          sed sapien. Sed condimentum magna dolor, condimentum interdum erat
          pharetra at. Fusce gravida mauris ut porttitor tempor. Duis turpis
          urna, tempus nec rutrum ut, tristique quis sapien. Sed convallis purus
          sem, nec posuere leo pulvinar nec. Nulla convallis maximus ante a
          sagittis. Nam id bibendum odio. Nulla eu blandit erat. Pellentesque
          sollicitudin hendrerit erat et aliquet. Donec metus odio, mattis vel
          mauris porta, sollicitudin venenatis neque. Duis vel purus id lacus
          consequat suscipit ut nec sapien. Nam non.
        </p>
      </section>
    </PageContainer>
  );
};

export default About;
