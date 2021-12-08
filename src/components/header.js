import React, { useEffect } from "react";
import Link from "next/link";
import Button from "./button";

import { nav } from "../../src/utils/localdata";

export default function Header() {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
    scrollTop >= 700
      ? header.classList.add("is-sticky-show")
      : header.classList.remove("is-sticky-show");
  };
  return (
    <header className="header" data-scroll-section>
      <div className="box">
        <Link href="/">
          <a className="logo">GET BEST CAR</a>
        </Link>
      </div>
      <div className="box">
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <Button href={`#` + `${item.link}`} className="-skew">
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
        <Button href="/" className="-outline -skew">
          Позвонить в офис
        </Button>
      </div>
    </header>
  );
}
