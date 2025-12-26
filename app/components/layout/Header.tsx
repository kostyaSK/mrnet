"use client";

import { useState } from "react";
import Image from "next/image";

const navLinkClass =
  "mt-2 text-[14px] leading-[1.4] tracking-[0.09em] uppercase";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
}

function NavLink({ href, children, highlight }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`${navLinkClass} ${highlight ? "text-blue-500" : ""}`}
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#technology", text: "Технология" },
    { href: "#platform", text: "Платформа управления" },
    { href: "#network", text: "Наша сеть" },
    { href: "#trial", text: "Тест-драйв" },
    { href: "#feedback", text: "Оставить отзыв", highlight: true },
  ];

  return (
    <header className="w-full z-50 flex md:items-baseline justify-between relative">
      {/* Логотип и телефон */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between w-full md:w-auto">
        <Image
          src="/icon/mainLogo.svg"
          alt="Логотип компании mrnet"
          width={185}
          height={41}
          className="w-[163px] h-[37px] md:w-[163px] md:h-[37px]"
        />
        <a
          href="tel:+78006003538"
          className="mt-[15px] md:ml-4 text-[14px] md:text-xs text-[#00E4F0]
                     leading-[1.4] tracking-[0.09em] uppercase
                     md:transition-colors md:duration-300 md:hover:text-blue-500"
        >
          +7 (800) 600-35-38
        </a>
      </div>
      {/* Бургер кнопка для мобильных */}
      <button
        className="mt-[11px] xl:hidden bg-black"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-7 h-[1px] bg-[#00E4F0] mb-3"></div>
        <div className="w-7 h-[1px] bg-[#00E4F0]"></div>
      </button>

      {/* Навигация */}
      <nav
        aria-label="Главное меню"
        className={`flex flex-col items-end xl:flex-row xl:gap-12 absolute xl:static top-full 
        left-0 w-full xl:w-auto bg-black xl:bg-transparent transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0"
        } xl:max-h-full`}
      >
        {links.map(({ href, text, highlight }) => (
          <NavLink key={href} href={href} highlight={highlight}>
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
