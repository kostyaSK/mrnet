"use client";

import { lights } from "./dataMap";

export default function Map() {
  return (
    <section className="pt-[72px] pb-[42px]">
      <h1 className="text-[32px] leading-[40px] tracking-[0.05em] uppercase">
        Подключаем к стабильному интернету по всей России
      </h1>

      <div
        className="relative flex-1 overflow-hidden mt-[42px] pt-8 pb-[52px] pl-10 pr-10 w-full mx-auto rounded-lg border border-[#FF4C00]"
        style={{
          boxShadow:
            "0px 0px 7px 4px #FF4C0099, inset 0px 0px 7px 4px #FF4C0099",
        }}
      >
        <img
          src="/images/mapRussia.png"
          alt="Фон"
          className="object-cover w-full h-auto"
        />

        {/* Огни в виде SVG */}
        {lights.map((light, index) => {
          const isChelyabinsk = light.city?.name === "Челябинск";

          return (
            <div
              key={index}
              className="absolute pointer-events-none"
              style={{
                top: `${light.top}%`,
                left: `${light.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* SVG с градиентом */}
              <svg width={light.size} height={light.size} viewBox="0 0 160 160">
                <defs>
                  <linearGradient
                    id={`grad-${index}`}
                    x1="0"
                    y1="0"
                    x2="500"
                    y2="500"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.105" stopColor={light.color} />
                    <stop offset="1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <g transform="matrix(-0.08 0 0 -0.08 80 80)">
                  <rect
                    x="0"
                    y="0"
                    width="1026.32"
                    height="1026.32"
                    fill={`url(#grad-${index})`}
                    shapeRendering="crispEdges"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="1026.32"
                    height="1026.32"
                    transform="scale(1 -1)"
                    fill={`url(#grad-${index})`}
                    shapeRendering="crispEdges"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="1026.32"
                    height="1026.32"
                    transform="scale(-1 1)"
                    fill={`url(#grad-${index})`}
                    shapeRendering="crispEdges"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="1026.32"
                    height="1026.32"
                    transform="scale(-1)"
                    fill={`url(#grad-${index})`}
                    shapeRendering="crispEdges"
                  />
                </g>

                {/* Точка в центре */}
                {light.city && (
                  <rect x={74} y={74} width={12} height={12} fill="#FFFFFF" />
                )}
              </svg>

              {/* Подпись города */}
              {light.city && (
                <div
                  className={`absolute text-[16px] text-black leading-[22px] whitespace-nowrap ml-[86px]
                ${isChelyabinsk ? "mt-[-74px]" : "-mt-[135px]"}`}
                >
                  <span className="inline-block bg-[#00E4F0] pt-[1px] pb-1 pr-1 pl-1 -mb-[4px] font-medium">
                    {light.city.name}
                  </span>
                  <br />
                  <span className="inline-block bg-[#00E4F0] pt-[2px] pb-[2px] pr-2 pl-1">
                    {light.city.people}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-[42px] flex justify-center items-center text-lg leading-[19px] gap-[61px]">
        <div className="flex items-center gap-3">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.07104"
              width="10"
              height="10"
              transform="rotate(45 7.07104 0)"
              fill="#FF4C00"
            />
          </svg>
          <h2>Наши клиенты</h2>
        </div>
        <div className="flex items-center gap-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="10" fill="white" />
          </svg>
          <h2>Отделы продаж</h2>
        </div>
      </div>
    </section>
  );
}
