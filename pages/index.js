import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";
import Image from "next/image";
import Button from "../src/components/button";
import SHead from "../src/sections/shead";
import Services from "../src/sections/services";
import SPrice from "../src/sections/sprice";
import Accordion from "../src/components/accordion";
import Sreview from "../src/sections/sreview";
import Simage from "../src/sections/simage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    maxWidth: "450px",
    maxHeight: "470px",
    padding: "40px",
  },
};

export default function Home() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }
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
            <div onClick={openModal}>
              <Button href="/" className="-theme -skew button">
                Оставить заявку
              </Button>
            </div>
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
        link="#price"
        titlebtn="Подробнее"
      />
      <Services />
      <Simage src="/images/04.jpg" />
      <SPrice />
      <SHead
        title="Частые вопросы автоподбора"
        sub="Полезная информация"
        description="Вы получаете качественную помощь при покупке автомобиля и
              ЭКОНОМИТЕ собственные нервы и средства, которые тратятся при
              покупке «автохлама»!"
        id="faqs"
        link="tel:+79501888444"
        titlebtn="Консультация"
      />
      <section data-scroll-section className="section-accordion">
        <div className="container -default">
          <Accordion />
        </div>
      </section>
      <Simage src="/images/03.jpg" />
      <SHead
        title="Качественная работа с клиентами автоподбора"
        sub="Отзывы наших клиентов"
        description="Вы получаете качественную помощь при покупке автомобиля и
              ЭКОНОМИТЕ собственные нервы и средства, которые тратятся при
              покупке «автохлама»!"
        id="review"
        link="tel:+79501888444"
        titlebtn="Звонок в офис"
      />
      <Sreview />
      <Simage src="/images/05.jpg" />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Заявка на автоподбор"
      >
        <div className="modal-head-wrap">
          <span
            className="modal-title"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            Заявка на автоподбор
          </span>
          <div className="modal-close" onClick={closeModal}>
            <img src="/close.png" alt="close" />
          </div>
        </div>

        <form method="POST" name="contact" className="modal-form" netlify>
          <input type="text" name="name" placeholder="Ваше имя и фамилия" />

          <input
            type="phone"
            name="phone"
            placeholder="Контактный номер телефона"
          />

          <input className="submit" type="submit" value="Отправить" />
        </form>
        <span className="policy-text">
          *Нажимая на кнопку отправить, вы соглашаетесь с
          <Link href="/policy">
            <a> условиями обработки персональных данных.</a>
          </Link>
        </span>
      </Modal>
    </>
  );
}
