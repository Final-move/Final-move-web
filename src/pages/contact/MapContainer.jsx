import React from "react";

const MapContainer = ({ className }) => {
  const url = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.2526037506655!2d3.3409704!3d6.4896643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d977c88cf93%3A0xd74c312211cbed39!2sSign%20Fireman%20Ministries!5e0!3m2!1sen!2sng!4v1697506837828!5m2!1sen!2sng`;

  return (
    <section className={`${className ? className : ""}`}>
      <iframe
        title="map to visit us now"
        src={url}
        loading="lazy"
        allowFullScreen
        className="w-full h-full"
      />
    </section>
  );
};

export default MapContainer;
