import Image from "next/image";
import Button from "../src/components/button";
import SHead from "../src/sections/shead";
import Services from "../src/sections/services";
import SPrice from "../src/sections/sprice";
import Accordion from "../src/components/accordion";
import Circlebtn from "../src/components/cyclebtn";
import Sslick from "../src/sections/sslick";
import Sreview from "../src/sections/sreview";

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
            <Button href="/" className="-theme -skew button">
              Узнать подробнее
            </Button>
          </div>
        </div>
        <Image
          data-scroll
          data-scroll-speed="-5"
          className="bg-image"
          src="/images/bg1.jpg"
          quality={100}
          layout="fill"
        />
      </section>
      <SHead
        id="services"
        title="Улуги автоподбора в Оренбурге"
        sub="Детальный осмотр автомобиля"
        description="Вы получаете качественную помощь при покупке автомобиля и
              ЭКОНОМИТЕ собственные нервы и средства, которые тратятся при
              покупке «автохлама»!"
      />
      <Services />
      <SPrice />
      <SHead
        title="Частые вопросы автоподбора"
        sub="Полезная информация"
        description="Вы получаете качественную помощь при покупке автомобиля и
              ЭКОНОМИТЕ собственные нервы и средства, которые тратятся при
              покупке «автохлама»!"
        id="faqs"
      />
      <section data-scroll-section className="section-accordion">
        <div className="container -default">
          <Accordion />
        </div>
      </section>
      <SHead
        title="Качественная работа с клиентами автоподбора"
        sub="Отзывы наших клиентов"
        description="Вы получаете качественную помощь при покупке автомобиля и
              ЭКОНОМИТЕ собственные нервы и средства, которые тратятся при
              покупке «автохлама»!"
        id="review"
      />
      <Sreview />
      <Sslick />
    </>
  );
}
