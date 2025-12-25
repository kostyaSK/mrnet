import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode; // текст кнопки
  className?: string;
}

export default function ButtonLink({
  href,
  children,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`w-[334px] h-9 flex items-center justify-center
             rounded-[30px] uppercase font-medium text-sm leading-[1.4] tracking-[0.07em] 
             text-black bg-[#00E4F0]
             hover:hover:bg-blue-500 transition-colors duration-300
        ${className}`}
    >
      {children}
    </Link>
  );
}
