"use client";

import Image from "next/image";
import { useState } from "react";
import ButtonGradient from "@/app/components/ui/ButtonGradient";
import { IMaskInput } from "react-imask";

const inputClasses = `w-full rounded-[30px] border px-[29px] py-[13px] text-lg leading-[22.2px]
  placeholder:text-[#B0B0B0] outline-none focus:ring-2 focus:ring-[#00E4F0]/50 focus:border-[#00E4F0]`;

export default function Registration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tg, setTg] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    consent?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "это поле обязательно";

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length !== 11) newErrors.phone = "Введите полный номер";

    if (!consent) newErrors.consent = "Необходимо согласие";

    setErrors(newErrors);

    // Отправляем только если ошибок нет
    if (Object.keys(newErrors).length === 0) {
      alert(
        `Форма успешно отправлена!\nИмя: ${name}\nТелефон: ${phone}\nTG: ${tg}`,
      );
      // Здесь можно отправлять данные на сервер
    }
  };

  return (
    <section className="mt-[103px] flex gap-3 h-[493px]">
      {/* Левая часть */}
      <div className="relative flex-1 overflow-hidden rounded-[8px]">
        <Image
          src="/images/register/gradientBack.png"
          alt="Фон"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 pt-[10px] pl-[21px]">
          <h1 className="font-medium text-[32px] text-black leading-[40px] tracking-[0.04em] uppercase">
            Хотите узнать
            <br />
            больше,
            <br />
            рассчитать
            <br />
            стоимость
            <br />
            или забрать
            <br />
            устройство
            <br />
            на бесплатный
            <br />
            тест?
          </h1>
        </div>
      </div>

      {/* Правая часть */}
      <div className="w-[909px] relative flex-2 overflow-hidden rounded-[8px] border border-[#00E4F0]">
        <Image
          src="/images/mainBlue.png"
          alt="Фон"
          fill
          className="object-cover"
        />

        <form
          onSubmit={handleSubmit}
          className="absolute inset-0 pt-[24px] pl-[41px] pr-[42px]"
        >
          <h1 className="mb-[23px] text-[20px] leading-[32px] tracking-[0.05em] uppercase">
            Услуга доступна только для юридических лиц
          </h1>

          {/* Имя */}
          <input
            type="text"
            placeholder="Ваше имя *"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name && e.target.value.trim()) {
                setErrors((prev) => ({ ...prev, name: undefined }));
              }
            }}
            className={`${inputClasses} ${
              errors.name
                ? "border-red-500 placeholder:text-red-500"
                : "border-[#00E4F0]"
            }`}
          />

          <h2 className="mt-4 mb-[23px] ml-[29px] text-[18px] leading-[19px]">
            Оставьте ваши контакты
          </h2>

          {/* Телефон */}
          <IMaskInput
            mask="+{7} (000) 000-00-00"
            value={phone}
            onAccept={(value: string) => {
              setPhone(value);
              if (errors.phone && value.replace(/\D/g, "").length === 11) {
                setErrors((prev) => ({ ...prev, phone: undefined }));
              }
            }}
            placeholder="+7 (___) ___-__-__"
            className={`${inputClasses} ${
              errors.phone
                ? "mb-3 border-red-500 placeholder:text-red-500"
                : "mb-3 border-[#00E4F0]"
            }`}
          />

          {/* TG */}
          <input
            type="text"
            placeholder="Ваш ник в tg"
            value={tg}
            onChange={(e) => setTg(e.target.value)}
            className={`${inputClasses} border-[#00E4F0]`}
          />

          {/* Чекбокс */}
          <label className="mt-[18px] flex gap-[9px] cursor-pointer items-start">
            <div
              className={`w-[20px] h-[20px] flex items-center justify-center rounded-sm border ${
                errors.consent ? "border-red-500" : "border-[#00E4F0]"
              }`}
            >
              <input
                type="checkbox"
                className="hidden peer"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (errors.consent && e.target.checked) {
                    setErrors((prev) => ({ ...prev, consent: undefined }));
                  }
                }}
              />
              <div className="w-[10px] h-[10px] bg-[#00E4F0] hidden peer-checked:block"></div>
            </div>

            <h3
              className={`text-[12px] leading-[19px] ${
                errors.consent ? "text-red-500" : "text-[#B0B0B0]"
              }`}
            >
              Я даю <span className="underline">согласие</span> на обработку
              моих персональных данных в форме обращения на странице сайта.
              Ознакомиться с условиями
              <br />
              <span className="underline">
                Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
              </span>
            </h3>
          </label>

          <h3 className="ml-[20px] mt-[10px] text-[12px] leading-[19px] text-[#B0B0B0]">
            * Поля, обязательные для заполнения
          </h3>

          <ButtonGradient className="mt-5">Начать!</ButtonGradient>
        </form>
      </div>
    </section>
  );
}
