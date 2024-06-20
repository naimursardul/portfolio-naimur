"use client";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import { useState, useEffect, useRef } from "react";
import { SliderConfigType } from "@/lib/types";

export default function Slider({
  children,
  sliderConfig,
}: Readonly<{ children: React.ReactNode; sliderConfig: SliderConfigType }>) {
  //
  //
  // VARRIABLES
  const { cardGap, cardWidth, smWindow, smCardWidth, cardNo } = sliderConfig;
  const [moveX, setMoveX] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [perCardWidth, setPerCardWidth] = useState<number>(0);
  const getWidthRef: any = useRef(null);
  const movePerClick: number = perCardWidth + cardGap;
  const displayCardNo: number = Math.floor(
    containerWidth / (perCardWidth + cardGap)
  );
  const displayWidth: number =
    displayCardNo * perCardWidth + cardGap * (displayCardNo - 1);
  const offNextBtn = moveX < -movePerClick * (cardNo - displayCardNo - 1);
  const offPrevBtn = moveX > 0 - 1;

  //
  //
  // HANDLE SIZE
  const handleSize = () => {
    setMoveX(0);
    setContainerWidth(getWidthRef.current?.offsetWidth);
    if (smWindow && smCardWidth && window?.innerWidth <= smWindow) {
      setPerCardWidth(smCardWidth);
    } else setPerCardWidth(cardWidth);
  };
  useEffect(() => {
    handleSize();
    if (window && getWidthRef?.current) {
      window.addEventListener("resize", handleSize);

      return () => window.removeEventListener("resize", handleSize);
    }
  }, []);

  //
  //
  // HANDLE MOVE FUNCTION
  const handleSlider = (slide: string) => {
    if (slide === "next") {
      setMoveX(moveX - movePerClick);
    }
    if (slide === "prev") {
      setMoveX(moveX + movePerClick);
    }
  };

  return (
    <div className="flex gap-3 max-sm:gap-2 justify-between ">
      <button
        disabled={offPrevBtn}
        onClick={() => handleSlider("prev")}
        className={`text-4xl text-[--text] ${offPrevBtn && "opacity-20"}`}
      >
        <IoMdArrowDropleftCircle />
      </button>
      <div ref={getWidthRef} className="w-full border-none flex justify-center">
        <div className="overflow-hidden" style={{ width: `${displayWidth}px` }}>
          {containerWidth > 0 && (
            <div
              // className={`flex justify-start`}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cardNo}, ${perCardWidth}px)`,
                transform: `translateX(${moveX}px)`,
                transition: "transform .5s",
                gap: `${cardGap}px`,
              }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
      <button
        disabled={offNextBtn}
        onClick={() => handleSlider("next")}
        className={`text-4xl text-[--text] ${offNextBtn && "opacity-20"}`}
      >
        <IoMdArrowDroprightCircle />
      </button>
    </div>
  );
}
