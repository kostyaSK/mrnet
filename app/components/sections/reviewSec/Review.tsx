"use client";

import { useState } from "react";
import { reviews } from "./dataReview";
import { ReviewCard } from "./ReviewCard";

const CARD_WIDTH = 563;
const GAP = 12;
const STEP = CARD_WIDTH + GAP;

export function Review() {
  const [current, setCurrent] = useState(0);
  const [openId, setOpenId] = useState<number | null>(null);

  const maxIndex = Math.max(0, reviews.length - 2);
  const dotsCount = maxIndex + 1;

  return (
    <section className="mr-[-36px] ml-[-36px] pt-[66px] relative">
      <div className="ml-9">
        <h1 className="text-[32px] leading-[40px] tracking-[0.05em] uppercase">
          95% клиентов выбирают
          <span className="text-[46px] lowercase"> mrnet</span>
          <br />
          после тест-драйва
        </h1>
      </div>

      {/* arrows */}
      <button
        onClick={() => setCurrent((v) => Math.max(v - 1, 0))}
        disabled={current === 0}
        className="absolute left-[36px] bottom-[-30px] w-[52px] h-[52px]
        flex items-center justify-center hover:scale-110 duration-300
        rounded-full border border-[#00E4F0] disabled:opacity-30"
      >
        <svg width="16" height="29" viewBox="0 0 16 29" fill="none">
          <path
            d="M14.7071 0.353516L0.707093 14.3535L14.7071 28.3535"
            stroke="#00E4F0"
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((v) => Math.min(v + 1, maxIndex))}
        disabled={current === maxIndex}
        className="absolute right-[35px] bottom-[-30px] w-[52px] h-[52px]
        flex items-center justify-center hover:scale-110 duration-300
        rounded-full border border-[#00E4F0] disabled:opacity-30"
      >
        <svg width="16" height="29" viewBox="0 0 16 29" fill="none">
          <path
            d="M0.353516 0.353516L14.3535 14.3535L0.353516 28.3535"
            stroke="#00E4F0"
          />
        </svg>
      </button>

      {/* viewport */}
      <div className="pt-[44px] overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-500"
          style={{ transform: `translateX(-${current * STEP}px)` }}
        >
          {reviews.map((item, index) => (
            <ReviewCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-4 pt-[51px]">
        {Array.from({ length: dotsCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition duration-500 ${
              current === i ? "bg-[#00E4F0]" : "border border-[#00E4F0]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
