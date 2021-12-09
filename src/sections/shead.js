import React from "react";
import Button from "../components/button";

export default function SHead(props) {
  return (
    <section id={props.id} data-scroll-section className="shead">
      <div className="container -default">
        <div className="section-head">
          <div className="box">
            <h2>{props.title}</h2>
            <span>{props.sub}</span>
          </div>
          <div className="box">
            <p>{props.description}</p>
          </div>
          <div className="box">
            <Button href={props.link} className="-fullsolid -skew">
              {props.titlebtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
