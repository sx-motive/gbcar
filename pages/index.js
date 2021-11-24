import Image from "next/image";
import Button from "../src/components/button";

export default function Home() {
  return (
    <>
      <section className="-hero" data-scroll-section>
        <div className="container -default">
          <div className="wrapper -default">
            <h1>Автоподбор в Оренбурге</h1>
            <span className="title">
              Квалифицированная помощь при покупке автомобиля
            </span>
            <p>
              В 95% аргументированный торг позволяет полностью окупить затраты
              на услуги подбора автомобиля.
            </p>
            <Button href="/" className="-theme">
              Оставить заявку
            </Button>
          </div>
        </div>
        <Image
          className="bg-image"
          src="/images/bg1.jpg"
          quality={100}
          layout="fill"
        />
      </section>
      <section className="services" data-scroll-section>
        <div className="container -default">
          <div className="section-head">
            <div className="box">
              <h2>Улуги автоподбора в Оренбурге</h2>
              <span>Детальный осмотр автомобиля</span>
            </div>
            <div className="box">
              <p>
                Вы получаете качественную помощь при покупке автомобиля и
                ЭКОНОМИТЕ собственные нервы и средства, которые тратятся при
                покупке «автохлама»!
              </p>
            </div>
            <div className="box">
              <Button href="/" className="-fullsolid -skew">
                Узнать цены
              </Button>
            </div>
          </div>
          <div className="-services-wrap">
            <div className="box"></div>
          </div>
        </div>
      </section>
    </>
  );
}
