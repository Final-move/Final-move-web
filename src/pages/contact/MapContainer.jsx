import React from "react";

const MapContainer = () => {
  return (
    <section className="w-full h-[500px] py-12 text-black">
      <iframe
        title="map to visit us now"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d253732.71472056038!2d3.4504704!3d6.4487424!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1697484113371!5m2!1sen!2sng"
        loading="lazy"
        allowFullScreen
        className="w-full h-full"
      />
    </section>
  );
};

export default MapContainer;
