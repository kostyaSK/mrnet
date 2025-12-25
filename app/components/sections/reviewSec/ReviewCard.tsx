"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ReviewItem } from "./dataReview";

const DEFAULT_HEIGHT = 360;
const CLAMP_LINES = 9;
const LINE_HEIGHT = 22.2;
const MAX_LINES = 11;
const MAX_TEXT_HEIGHT = LINE_HEIGHT * MAX_LINES;
const EXTRA_HEIGHT = 116;

interface ReviewCardProps {
  item: ReviewItem;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
}

export function ReviewCard({
  item,
  isOpen,
  onToggle,
  isFirst,
}: ReviewCardProps) {
  const textRef = useRef<HTMLDivElement>(null);

  const [canExpand, setCanExpand] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number>(MAX_TEXT_HEIGHT);

  useEffect(() => {
    if (!textRef.current) return;

    const scrollH = textRef.current.scrollHeight;
    const expandable = scrollH > MAX_TEXT_HEIGHT;

    setCanExpand(expandable);
    setMaxHeight(isOpen ? scrollH : MAX_TEXT_HEIGHT);
  }, [isOpen, item.text]);

  return (
    <div
      className={`relative flex-shrink-0 w-[563px] rounded-[8px] border border-[#00E4F0] overflow-hidden transition-all duration-500 ease-in-out ${
        isFirst ? "ml-9" : ""
      }`}
      style={{
        height: canExpand ? maxHeight + EXTRA_HEIGHT : DEFAULT_HEIGHT,
      }}
    >
      <Image
        src={item.image}
        alt={item.company}
        fill
        className="object-cover"
      />

      <div className="relative z-10 h-full flex flex-col justify-between pl-6 pt-6">
        <div>
          <div className="flex pb-[25px]">
            <h1 className="pr-[14px] text-[14px] leading-[19px] text-[#00E4F0]">
              <span className="uppercase tracking-[0.05em] font-medium">
                {item.company}
              </span>
              <br />
              {item.name}
            </h1>

            <h1 className="text-[14px] leading-[19px]">
              {item.position}
              <br />
              {item.department}
            </h1>
          </div>

          <div
            ref={textRef}
            className={`text-[18px] leading-[22.2px] transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              !isOpen ? `line-clamp-${CLAMP_LINES + 1}` : ""
            }`}
            style={{ paddingBottom: isOpen ? "24px" : "0px" }}
          >
            {item.text}
          </div>
        </div>
      </div>

      {canExpand && (
        <button
          onClick={onToggle}
          className="absolute bottom-4 right-4 z-20 hover:scale-110 transition-transform"
        >
          <svg
            width="19"
            height="11"
            viewBox="0 0 19 11"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M0.353516 0.353516L9.35351 9.35352L18.3535 0.353516"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
