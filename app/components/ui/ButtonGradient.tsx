import React from "react";

interface ButtonGradientProps {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonGradient({
  children,
  className = "",
}: ButtonGradientProps) {
  return (
    <button
      type="submit"
      className={`w-[334px] h-[52px] flex items-center justify-center rounded-[30px] uppercase font-medium text-[20px]
                 leading-[1.4] tracking-[0.07em] text-black
                 bg-gradient-to-r from-[#FF4C00] via-[#B38BCE] to-[#00E4F0]
                 hover:from-[#B38BCE] hover:via-[#00E4F0] hover:to-[#FF4C00] transition-colors duration-300
                 ${className}`}
    >
      {children}
    </button>
  );
}
