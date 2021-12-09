import React from "react";

export default function Simage(props) {
  return (
    <section data-scroll-section className="section-full-image">
      <img
        src={props.src}
        alt="Автоподбор в Оренбурге"
        data-scroll
        data-scroll-speed="-4"
      />
    </section>
  );
}
