import { SliderConfigType } from "@/lib/types";
import Slider from "../Slider";
import Review from "./Review";

export default function ExpSection() {
  const sliderConfig: SliderConfigType = {
    cardGap: 32,
    cardWidth: 300,
    smWindow: 992,
    smCardWidth: 220,
    cardNo: 5,
  };
  return (
    <div className="flex flex-col gap-8 bg-[--bgSoft] globPad opacity-85">
      <div className="flex flex-col gap-3 ">
        <h2 className="text-4xl font-bold text-[--text] text-center">
          Experience of Serving Client
        </h2>
        <p className="text-[--text] text-center">
          Trust our dedication. Clients affirm our commitment, making us the top
          website design and development company in Bangladesh. Explore our
          services now!
        </p>
      </div>

      <Slider sliderConfig={sliderConfig}>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </Slider>
    </div>
  );
}
