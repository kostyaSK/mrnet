"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";

const cards = [
  {
    id: 1,
    img: "/icon/mainSection/mainWifi.svg",
    title: (
      <>
        надежный и быстрый интернет, который
        <br />
        не падает
      </>
    ),
  },
  {
    id: 2,
    img: "/icon/mainSection/mainPref.svg",
    title: (
      <>
        КОНТРОЛЬ ВСЕЙ
        <br /> СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ
      </>
    ),
  },
  {
    id: 3,
    img: "/icon/mainSection/mainArrow.svg",
    title: (
      <>
        Единый инструмент
        <br />
        для масштабирования по всей стране
      </>
    ),
  },
];

const CARD_WIDTH = 335; // mobile ширина синий карточки
const GAP = 3;

export default function MainSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    function updateVisible() {
      const width = window.innerWidth;
      if (width < 773)
        setVisibleCount(1); // mobile
      else setVisibleCount(2);
    }

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, cards.length - visibleCount);

  return (
    <section className="relative flex flex-col pt-[59px]">
      {/* Главный блок */}
      <div className="flex flex-col xl:flex-row h-auto xl:h-[528px] gap-3">
        <div
          className="relative flex flex-grow overflow-hidden rounded-[8px] border border-[#FF4C00]
        h-[706px] md:h-[606px] xl:h-auto order-2 xl:order-1"
        >
          <Image
            src="/images/mainRed.png"
            alt="Фон"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 px-[15px] py-[11px] sm:px-[21px] sm:py-[17px] flex flex-col sm:justify-between 2xl:justify-center ">
            <h1 className="mb-[22px] xl:mb-0 2xl:mb-[20px] text-[30px] md:text-[50px] leading-[34px] sm:leading-[55px] tracking-[0.03em] uppercase">
              Беспроводной <br /> интернет <br className="sm:hidden" /> для
              бизнеса
            </h1>
            <h2 className="-mr-[2px] mb-12 xl:mb-0 2xl:mb-[55px] text-[18px] sm:text-[26px] leading-[25px] sm:leading-8 tracking-[0.06em] uppercase">
              от <span className="font-bold">2 990</span> рублей* в месяц!{" "}
              <br />
              Установка по любому адресу в РФ!
            </h2>

            <ButtonLink href="#trial">Попробовать</ButtonLink>

            <ul className="-mr-[7px] mb-[34px] sm:mb-0 2xl:mb-6 mt-[39px] sm:mt-0 2xl:mt-9 ml-6 list-disc list-outside text-lg font-normal leading-[22.2px] tracking-[0.01em]">
              <li>
                Мультироутер с технологией суммирования нескольких каналов связи
                в один
              </li>
              <li>Высокая скорость и отказоустойчивость интернет-соединения</li>
              <li>Единый договор на ПО, оборудование и связь</li>
              <li>Простое подключение за 7 минут</li>
              <li>Моментальная техподдержка 24/7 в Telegram</li>
            </ul>

            <p className="sm:ml-[3px] text-xs text-[#B0B0B0] leading-[14.2px] tracking-[0.01em]">
              * Без учета стоимости оборудования, возможен выкуп оборудования
              или аренда, стоимость <br className="hidden sm:block" />
              будет зависеть от модели мультироутера
            </p>
          </div>
        </div>
        <div className="flex justify-center xl:justify-start flex-shrink-0 order-1 xl:order-2">
          <Image
            src="/images/mainRouter.png"
            alt="Роутер"
            width={563}
            height={525}
          />
        </div>
      </div>

      {/* Нижние карточки */}
      <div className="mt-3 hidden lg:flex gap-3">
        {/* Синяя карточка */}
        <div className="relative flex-1 overflow-hidden h-[220px] border border-[#00E4F0] rounded-[8px]">
          <Image
            src="/images/mainBlue.png"
            alt="Фон"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col justify-between pl-[21px] pt-5 pb-4">
            <Image
              src="/icon/mainSection/mainWifi.svg"
              className="ml-[3px]"
              alt="Лого"
              width={82}
              height={60}
            />
            <h1 className="text-[20px] leading-none tracking-[0.04em] uppercase">
              надежный и быстрый <br />
              интернет, который не падает
            </h1>
          </div>
        </div>

        {/* Синяя карточка */}
        <div className="relative flex-1 overflow-hidden h-[220px] border border-[#00E4F0] rounded-[8px]">
          <Image
            src="/images/mainBlue.png"
            alt="Фон"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col justify-between pl-[21px] pt-5 pb-4">
            <Image
              src="/icon/mainSection/mainPref.svg"
              alt="Лого"
              width={106}
              height={60}
            />
            <h1 className="text-[20px] leading-none tracking-[0.04em] uppercase">
              КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ <br />
              ГИБКУЮ НАСТРОЙКУ
            </h1>
          </div>
        </div>

        {/* Синяя карточка */}
        <div className="relative flex-1 overflow-hidden h-[220px] border border-[#00E4F0] rounded-[8px]">
          <Image
            src="/images/mainBlue.png"
            alt="Фон"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col justify-between pl-[18px] pt-5 pb-4">
            <Image
              src="/icon/mainSection/mainArrow.svg"
              alt="Лого"
              width={64}
              height={60}
            />
            <h1 className="text-[20px] leading-none tracking-[0.04em] uppercase">
              Единый инструмент <br />
              для масштабирования <br />
              по всей стране
            </h1>
          </div>
        </div>
      </div>

      {/* Мобильный слайдер */}
      <div className="mt-3 lg:hidden overflow-hidden">
        <div
          className={`flex gap-${GAP} transition-transform duration-500`}
          style={{
            transform: `translateX(-${current * (CARD_WIDTH + GAP * 4)}px)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative shrink-0 w-[335px] h-[220px] overflow-hidden rounded-[8px] border border-[#00E4F0]"
            >
              <Image
                src="/images/mainBlue.png"
                alt="Фон"
                fill
                className="object-cover"
              />
              <div className="relative z-10 h-full flex flex-col justify-between pl-[15px] pt-[15px] pb-[14px]">
                <Image src={card.img} alt="" width={82} height={60} />
                <h1 className="text-[19px] tracking-[0.04em] uppercase">
                  {card.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
        {/* dots */}
        <div className="flex justify-center gap-[13px] pt-[47px]">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-[10px] h-[10px] rounded-full transition ${current === i ? "bg-[#00E4F0]" : "border border-[#00E4F0]"}`}
            />
          ))}
        </div>
        {/* arrows */}
        <button
          onClick={() => setCurrent((v) => Math.max(v - 1, 0))}
          disabled={current === 0}
          className="absolute left-0 bottom-[-20px] w-12 h-12
                     flex items-center justify-center hover:scale-110 duration-300
                     rounded-full border border-[#00E4F0] disabled:opacity-30"
        >
          <svg width="16" height="29" viewBox="0 0 16 29" fill="none">
            <path
              d="M14.7071 0.353516L0.707093 14.3535L14.7071 28.3535"
              stroke="#00E4F0"
            />
          </svg>
        </button>

        <button
          onClick={() => setCurrent((v) => Math.min(v + 1, maxIndex))}
          disabled={current === maxIndex}
          className="absolute right-0 bottom-[-20px] w-12 h-12
                     flex items-center justify-center hover:scale-110 duration-300
                     rounded-full border border-[#00E4F0] disabled:opacity-30"
        >
          <svg width="16" height="29" viewBox="0 0 16 29" fill="none">
            <path
              d="M0.353516 0.353516L14.3535 14.3535L0.353516 28.3535"
              stroke="#00E4F0"
            />
          </svg>
        </button>
      </div>

      {/* Кнопка звонка */}
      <a
        href="tel:+78006003538"
        className="hidden lg:flex items-center justify-center absolute -bottom-9 -right-[1px] z-50 h-[52px] w-[52px] rounded-full border border-white bg-white/50 transition hover:scale-105 hover:bg-white/70"
      >
        <div className="flex items-center justify-center h-[23px] w-[23px]">
          <Image
            src="/icon/mainSection/mainNumber.svg"
            alt="Позвонить"
            width={23}
            height={23}
          />
        </div>
      </a>
    </section>
  );
}
