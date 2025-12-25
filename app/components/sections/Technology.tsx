import Image from "next/image";
import ButtonLink from "@/app/components/ui/ButtonLink";

export default function Technology() {
  return (
    <section className="pt-[61px]">
      <h1 className="text-[32px] leading-[39px] tracking-[0.05em] uppercase">
        технология
      </h1>
      <div className="flex pt-[30px] gap-3">
        <Image
          src="/images/technology/technologyRouter.png"
          alt="Роутер"
          width={793}
          height={308}
        />

        <div className="relative flex-grow overflow-hidden rounded-[8px] border border-[#FF4C00]">
          <Image
            src="/images/mainRed.png"
            alt="Фон"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 pl-[21px] pt-[14px] pb-[20px] flex flex-col justify-between">
            <h1 className="pb-[20px] text-[24px] leading-[30px]">
              Прокачайте свой интернет
              <br />
              с высокоскоростными технологиями mrnet.
              <br />
              Наш мультироутер суммирует несколько
              <br />
              каналов связи в один (технология бондинг),
              <br />
              значительно повышая устойчивость
              <br />и скорость соединения!
            </h1>

            <ButtonLink href="#info">узнать больше</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
