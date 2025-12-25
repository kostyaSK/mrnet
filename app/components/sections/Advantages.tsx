import Image from "next/image";
import ButtonGradient from "@/app/components/ui/ButtonGradient";

export default function Advantages() {
  return (
    <section className="pt-[73px]">
      <h1 className="text-[32px] leading-[40px] tracking-[0.05em] uppercase">
        Решение, созданное айтишниками <br /> для айтишников
      </h1>
      <div className="pt-[43px] flex flex-col gap-3 ">
        <div className="flex gap-3">
          <div className="relative flex-1 overflow-hidden h-[308px] rounded-[8px] border border-[#FF4C00]">
            <Image src="/images/mainRed.png" alt="Фон" fill />
            <div className="relative z-10 h-full flex flex-col pl-[21px] pt-[14px] pb-4">
              <div className="h-[93px]">
                <h1 className="text-[26px] leading-[32px] tracking-[0.05em] uppercase">
                  Ценим ваше время
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className="pb-[26px] text-lg leading-[22.2px]">
                  Подключите мультироутер с быстрым
                  <br /> интернетом всего за 7 минут. Наши
                  <br /> устройства работают по принципу
                  <br /> Plug'n'Play (подключи и пользуйся).
                </h2>
                <h2 className="text-lg leading-[22.2px]">
                  Вы получаете надёжную связь и отсутствие
                  <br /> головной боли в виде договоров с разными
                  <br /> провайдерами
                </h2>
              </div>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden h-[308px] rounded-[8px] border border-[#FF4C00]">
            <Image src="/images/mainRed.png" alt="Фон" fill />
            <div className="relative z-10 h-full flex flex-col pl-[21px] pt-[14px] pb-4">
              <div className="h-[93px]">
                <h1 className="text-[26px] leading-[32px] tracking-[0.05em] uppercase">
                  Безграничные <br /> Возможности
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className="pb-[26px] text-lg leading-[22.2px]">
                  Подберём оборудование для новых точек
                  <br /> и оперативно подключим к интернету
                  <br /> по любому адресу.
                </h2>
                <h2 className="text-lg leading-[22.2px]">
                  Всё это — без необходимости заключения
                  <br /> дополнительных контрактов
                </h2>
              </div>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden h-[308px] rounded-[8px] border border-[#FF4C00]">
            <Image src="/images/mainRed.png" alt="Фон" fill />
            <div className="relative z-10 h-full flex flex-col pl-[21px] pt-[14px] pb-4">
              <div className="h-[93px]">
                <h1 className="text-[26px] leading-[32px] tracking-[0.05em] uppercase">
                  Индивидуальный <br /> подход
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className="pb-[26px] text-lg leading-[22.2px]">
                  Мы всегда идем навстречу клиенту,
                  <br /> предлагая оптимальное по стоимости
                  <br /> решение.
                </h2>
                <h2 className="text-lg leading-[22.2px]">
                  Заполните заявку, и в рабочее время мы <br /> за 1 час сделаем
                  расчёт
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <div className="relative flex-1 overflow-hidden h-[398px] rounded-[8px]">
              <Image src="/images/advantages/gradient.png" alt="Фон" fill />
              <div className="relative z-10 h-full flex flex-col justify-between pl-[30px] pt-[18px] pb-[26px]">
                <h1 className="font-medium text-[45px] text-black leading-[53px] uppercase">
                  Попробуйте <br />
                  14 дней бесплатно
                </h1>
                <h2 className="text-[24px] text-black leading-[30px]">
                  Развивайте свою инфру с{" "}
                  <span className="font-medium">mrnet.</span> Без лишних
                  <br /> затрат и костылей. Высокоскоростной интернет —<br />{" "}
                  удобно, эффективно!
                </h2>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/advantages/router.png"
                alt="Роутер"
                width={678}
                height={398}
              />
            </div>
          </div>
          <div className="mt-[34px] flex justify-center">
            <ButtonGradient>Начать!</ButtonGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
