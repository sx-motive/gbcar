import Link from "next/link";
import Button from "./button";

import data from "../../pages/api/data";
const links = data[0];

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
          {links.map((item, index) => (
            <li key={index}>
              <Button href={item.link} className="-skew">
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
        <Button href="/" className="-outline -skew">
          Обратный звонок
        </Button>
      </div>
    </header>
  );
}
