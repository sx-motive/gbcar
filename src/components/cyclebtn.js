import React from "react";

export default function Circlebtn(props) {
  return (
    <button className="button button--surtur">
      <svg className="textcircle" viewBox="0 0 500 500">
        <title>{props.children}</title>
        <defs>
          <path
            id="textcircle"
            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
          />
        </defs>
        <text>
          <textPath
            xlinkHref="#textcircle"
            aria-label="Projects & client work 2020"
            textLength="900"
          >
            {props.children}
          </textPath>
        </text>
      </svg>
      <img src="/up-arrow.png" alt="arrow" />
    </button>
  );
}
