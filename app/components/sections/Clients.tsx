"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const sponsors = [
  { src: "/images/clients/36.6.png", w: 67, h: 68 },
  { src: "/images/clients/nadezhdaFarm.png", w: 123, h: 97 },
  { src: "/images/clients/aicraft.png", w: 114, h: 113 },
  { src: "/images/clients/pokupochka.png", w: 157, h: 45 },
  { src: "/images/clients/ortk.png", w: 94, h: 94 },
  { src: "/images/clients/alenka.png", w: 129, h: 50 },
  { src: "/images/clients/rediar.png", w: 166, h: 42 },
];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  // Центрируем слайдер при загрузке
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const parentWidth = track.parentElement!.offsetWidth;
    const trackWidth = track.scrollWidth;

    const initialX = (parentWidth - trackWidth) / 2;
    setCurrentX(initialX); // может быть положительным или отрицательным
  }, []);

  const onStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX - currentX);
  };

  const onMove = (clientX: number) => {
    if (!isDragging || !trackRef.current) return;

    const track = trackRef.current;
    const parentWidth = track.parentElement!.offsetWidth;
    const trackWidth = track.scrollWidth;

    const newX = clientX - startX;
    const maxTranslate = trackWidth - parentWidth;

    // Ограничиваем движение: слева track не уйдет дальше 0, справа не выйдет за maxTranslate
    const clampedX = Math.min(Math.max(newX, -maxTranslate), 0);
    setCurrentX(clampedX);
  };

  const onEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="pt-[75px]">
      <h1 className="text-[24px] sm:text-[32px] leading-[32px] sm:leading-[39px] tracking-[0.05em] uppercase mb-[63px]">
        500+ клиентов
        <br className="sm:hidden" />
        уже с нами
      </h1>

      <div
        className="overflow-hidden -mx-5 md:-mx-9"
        onMouseLeave={onEnd}
        onMouseUp={onEnd}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseDown={(e) => onStart(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onEnd}
      >
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex gap-[13px] md:gap-5 pr-[20px]"
            style={{
              transform: `translateX(${currentX}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease",
            }}
          >
            {sponsors.map((item, idx) => (
              <div
                key={idx}
                className="w-[140px] md:w-[220px] h-[51px] md:h-[80px]
              flex flex-shrink-0 items-center justify-center rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={`Sponsor ${idx + 1}`}
                  width={item.w}
                  height={item.h}
                  className="object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
