import Image from "next/image";

const navLinkClass =
  "text-xs font-normal uppercase transition-colors duration-300 hover:text-blue-500";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
}

function NavLink({ href, children, highlight }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`${
        highlight
          ? `${navLinkClass} 
            text-blue-500 hover:text-blue-800`
          : navLinkClass
      }`}
    >
      {children}
    </a>
  );
}

export default function Header() {
  return (
    <header className="flex items-baseline justify-between">
      <div className="flex items-baseline gap-14">
        <Image
          src="/icon/mainLogo.svg"
          alt="Логотип компании mrnet"
          width={185}
          height={41}
        />
        <a
          href="tel:+78006003538"
          className="transition-colors duration-300 hover:text-blue-500"
        >
          +7 (800) 600-35-38
        </a>
      </div>

      <nav aria-label="Главное меню" className="flex gap-[50px]">
        <NavLink href="#technology">Технология</NavLink>
        <NavLink href="#platform">Платформа управления</NavLink>
        <NavLink href="#network">Наша сеть</NavLink>
        <NavLink href="#trial">Тест-драйв</NavLink>
        <NavLink href="#feedback" highlight>
          Оставить отзыв
        </NavLink>
      </nav>
    </header>
  );
}
