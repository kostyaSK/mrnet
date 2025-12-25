import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";

export default function MainSection() {
  return (
    <section className="relative flex flex-col pt-[59px]">
      {/* Главный блок */}
      <div className="flex h-[528px] gap-3">
        <div className="relative flex-grow overflow-hidden rounded-[8px] border border-[#FF4C00]">
          <Image
            src="/images/mainRed.png"
            alt="Фон"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 px-[21px] py-[17px] flex flex-col justify-center">
            <h1 className="pb-[20px] text-[50px] leading-[55px] tracking-[0.03em] uppercase">
              Беспроводной <br /> интернет для бизнеса
            </h1>
            <h2 className="pb-[55px] text-[26px] leading-8 tracking-[0.06em] uppercase">
              от <span className="font-bold">2 990</span> рублей* в месяц!{" "}
              <br />
              Установка по любому адресу в РФ!
            </h2>

            <ButtonLink href="#trial">Попробовать</ButtonLink>

            <ul className="mb-6 mt-9 ml-6 list-disc list-outside text-lg font-normal leading-[22.2px] tracking-[0.01em]">
              <li>
                Мультироутер с технологией суммирования нескольких каналов связи
                в один
              </li>
              <li>Высокая скорость и отказоустойчивость интернет-соединения</li>
              <li>Единый договор на ПО, оборудование и связь</li>
              <li>Простое подключение за 7 минут</li>
              <li>Моментальная техподдержка 24/7 в Telegram</li>
            </ul>

            <p className="ml-[3px] text-xs text-[#B0B0B0] leading-[14.2px] tracking-[0.01em]">
              * Без учета стоимости оборудования, возможен выкуп оборудования
              или аренда, стоимость <br />
              будет зависеть от модели мультироутера
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/mainRouter.png"
            alt="Роутер"
            width={563}
            height={525}
          />
        </div>
      </div>

      {/* Нижние карточки */}
      <div className="mt-3 flex gap-3">
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

      {/* Кнопка звонка */}
      <a
        href="tel:+78006003538"
        className="absolute -bottom-9 -right-[1px] z-50 h-[52px] w-[52px] flex items-center justify-center rounded-full border border-white bg-white/50 transition hover:scale-105 hover:bg-white/70"
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
