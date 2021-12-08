import Link from "next/link";
import Button from "./button";
import { nav } from "../../src/utils/localdata";

export default function Footer() {
  return (
    <footer className="footer" data-scroll-section>
      <div className="container -default">
        <div className="footer-wrapper">
          <div className="row">
            <div className="box">
              <span>- Переходим к действию</span>
              <span className="f-title">
                Доверьте нам подобрать лучший автомобиль на рынке, специально
                для вас!
              </span>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <span className="sub">- Позвоните нам сейчас</span>
              <Button href="/" className="-skew call">
                +7 (950) 1888-444
              </Button>
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
            </div>
            <div className="box">
              <Link href="https://www.behance.net/motive">
                <a>
                  <img src="/motive-logo.svg" alt="Denis Kunitsyn" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
