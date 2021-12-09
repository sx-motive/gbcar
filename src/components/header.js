import React, { useEffect } from "react";
import Link from "next/link";
import Button from "./button";

import { nav } from "../../src/utils/localdata";

export default function Header() {
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

        <Button href="tel:+79501888444" className="-outline -skew">
          Позвонить в офис
        </Button>
      </div>
    </header>
  );
}
