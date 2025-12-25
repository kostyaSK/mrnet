import Image from "next/image";

export default function Footer() {
  return (
    <section className="mt-[113px]">
      <h1 className="text-[20px] leading-[39px] tracking-[0.05em] uppercase">
        Дефолтный подвал
      </h1>
      <div className="-mr-9 mt-[51px] h-[333px] flex justify-between">
        <div className="h-[253px] w-full flex justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-light text-[12px] leading-[19.6px] tracking-[0.01em]">
                ООО «Ньюком Дистрибьюшн»,
                <br />
                ОГРН: 1207700420784,
                <br />
                Юридический адрес: 119017, Российская
                <br />
                Федерация, г. Москва,
                <br />
                ул. Большая Ордынка, д. 54 стр. 2
              </h3>
            </div>
            <div>
              <Image
                src="/icon/mainLogo.svg"
                alt="Логотип компании mrnet"
                width={185}
                height={41}
              />
              <h2 className="mt-[18px] text-[12px] leading-[18px] tracking-[0.07em] uppercase">
                КАТЕГОРИЧЕСКИ НОВЫЙ
                <br />
                ИНТЕРНЕТ ДЛЯ БИЗНЕСА
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-light text-[12px] leading-[19.6px] tracking-[0.01em]">
                Почта: <span className="underline">info@mrnet.ru</span>
                <br />
                График работы: по будням
                <br />с 9:00 до 19:00 по Москве
              </h3>
              <h3 className="mt-[25px] font-light text-[12px] leading-[19.6px] tracking-[0.01em]">
                Служба поддержки:
                <br />
                Тел: 8 <span className="underline">(495) 308-41-51</span>
                <br />
                Тел: <span className="underline">8 (800) 600-35-38</span>
                <br />
                Почта: <span>helpdesk@mrnet.ru</span>
                <br />
                График работы: 24/7
              </h3>
            </div>
            <h3 className="font-light text-[12px] leading-[1.4] tracking-[0.01em]">
              ©2025 mrnet.ru Все права защищены
            </h3>
          </div>
          <div className="mr-[7px] flex flex-col justify-between cursor-pointer">
            <h3 className="font-light text-[12px] leading-[19.6px] tracking-[0.01em] underline">
              Пользовательское соглашение
              <br />
              Политика в отношении обработки персональных данных
              <br />
              Соглашение об обработке данных
              <br />
              Соглашение о порядке оказания услуг
              <br />
              Соглашение о технической поддержке
              <br />
              Требования по эксплуатации оборудования mrnet
              <br />
              Требования к серверным ресурсам для установки ПО
            </h3>
            <h3 className="font-light text-[12px] leading-[19.6px] tracking-[0.01em] underline">
              Инструкция по работе с личным кабинетом
              <br />
              Инструкция по эксплуатации мультироутера 04
              <br />
              Инструкция по эксплуатации мультироутера 05
              <br />
              Инструкция по эксплуатации мультироутера 06
              <br />
              Инструкция по эксплуатации мультироутера 07
            </h3>
          </div>
        </div>
        <Image
          src="/images/footerBlock.png"
          alt="кубики"
          width={368}
          height={327}
          className="mt-[6px]"
        />
      </div>
    </section>
  );
}
