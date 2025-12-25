import Image from "next/image";
import ButtonLink from "@/app/components/ui/ButtonLink";

export default function PersonalCab() {
  return (
    <section className="pt-[73px]">
      <h1 className="text-[32px] leading-[40px] tracking-[0.05em] uppercase">
        Настраивайте сеть и управляйте всеми
        <br /> устройствами через единый личный кабинет
      </h1>
      <div className="pt-[31px] flex gap-3">
        <div className="flex flex-col gap-3 flex-grow">
          <div className="relative flex-1 overflow-hidden h-[220px] rounded-[8px] border border-[#00E4F0]">
            <Image
              src="/images/mainBlue.png"
              alt="Фон"
              fill
              className="object-cover"
            />
            <div className="relative z-10 h-full flex flex-col justify-between pl-[21px] pt-[11px] pb-4">
              <h1 className="text-[26px] leading-[39px] tracking-[0.05em] uppercase">
                мониторинг
              </h1>
              <div className="flex flex-col">
                <h2 className="pb-[26px] text-lg leading-[22.2px]">
                  Графики потребления трафика
                </h2>
                <h2 className="text-lg leading-[22.2px]">
                  Просмотр подключенных к мультироутеру
                  <br /> сетевых устройств
                </h2>
              </div>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden h-[220px] rounded-[8px] border border-[#00E4F0]">
            <Image
              src="/images/mainBlue.png"
              alt="Фон"
              fill
              className="object-cover"
            />
            <div className="relative z-10 h-full flex flex-col justify-between pl-[21px] pt-[11px] pb-4">
              <h1 className="text-[26px] leading-[39px] tracking-[0.05em] uppercase">
                тонкая настройка
              </h1>
              <div className="flex flex-col">
                <h2 className="pb-[26px] text-lg leading-[22.2px]">
                  Настройка тоннелей PPTP, L2TP, GRE, IPIP
                </h2>
                <h2 className="text-lg leading-[22.2px]">
                  Настройка пробросов портов
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/personalCab/pc.png"
          alt="НовыйПоезд"
          width={793}
          height={452}
          className="rounded-lg flex-shrink-0"
        />
      </div>
      <div className="flex justify-center pt-[34px]">
        <ButtonLink href="#try">Испытать все возможности</ButtonLink>
      </div>
    </section>
  );
}
