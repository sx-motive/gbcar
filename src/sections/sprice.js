import React from "react";
import Button from "../components/button";

export default function SPrice(props) {
  return (
    <section id="price" data-scroll-section className={`sprice ${props.theme}`}>
      <div className="container -default">
        <div className="section-head">
          <div className="box">
            <h2>Цена автоподбора в Оренбурге</h2>
            <span>Пакеты услуг автоподбора</span>
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
              Консультация
            </Button>
          </div>
        </div>
      </div>

      <div className="container -default">
        <div className="sp-wrapper">
          <div className="sp-item">
            <span className="sp-item-title">Базовый осмотр</span>
            <ul>
              <li>Полная проверка кузова автомобиля</li>
              <li>Оценка общего состояния автомобиля</li>
              <li>Оценка корректности указанного пробега</li>
              <li>Проверка документов на автомобиль</li>
              <li>Проверка работоспособности всех систем салона автомобиля</li>
              <li>Тестовая поездка на автомобиле</li>
              <li>Предварительная оценка необходимых вложений в автомобиль</li>
              <li>
                Резюме специалиста о соответствии состояния автомобиля его
                стоимости
              </li>
            </ul>
            <div className="sp-item-footer">
              <span className="sp-item-price">2000р</span>
              <Button href="/" className="-fullsolid -skew">
                Заказать услугу
              </Button>
            </div>
          </div>
          <div className="sp-item">
            <span className="sp-item-title">Специалист на день</span>
            <ul>
              <li>
                Встреча специалиста с заказчиком в заранее согласованном месте
              </li>
              <li>
                Выезд, осмотр и базовая проверка неограниченного количества
                автомобилей в рамках одного рабочего дня *(Осмотр включает все
                пункты предусмотренные пакетом "Базовый осмотр")
              </li>
              <li>Передвижение по городу на нашем авто</li>
              <li>Помощь в принятии решения о приобретении автомобиля</li>
              <li>Скидка 10% при заказе!</li>
            </ul>
            <div className="sp-item-footer">
              <span className="sp-item-price">5000р</span>
              <Button href="/" className="-fullsolid -skew">
                Заказать услугу
              </Button>
            </div>
          </div>
          <div className="sp-item">
            <span className="sp-item-title">Авто под ключ</span>
            <ul>
              <li>Консультация по выбору автомобиля</li>
              <li>Анализ рынка предложений по РФ</li>
              <li>Оформление Договора на подбор автомобиля</li>
              <li>Дистанционный поиск предложений</li>
              <li>Выезд и "Базовая диагностика" автомобилей</li>
              <li>
                Предоставление фотоотчета и согласование автомобиля с заказчиком
              </li>
              <li>Комплексная диагностика автомобиля</li>
              <li>Торг с продавцом в интересах заказчика</li>
            </ul>
            <div className="sp-item-footer">
              <span className="sp-item-price">10000р</span>
              <Button href="/" className="-fullsolid -skew">
                Заказать услугу
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
