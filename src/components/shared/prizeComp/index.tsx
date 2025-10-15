import type { ReactNode } from "react";

type PrizeCompProps = {
  icon: ReactNode;
  content: ReactNode;
};

function PrizeComp({ icon, content }: PrizeCompProps) {
  return (
    <div className=" lg:w-[388px] sm:w-[40%] w-[70%] bg-[#FFF0CD] text-[#464646] py-[32px] px-[8px] rounded-[4px]">
      <div className="flex justify-center items-center mb-2">{icon}</div>
      <div className="text-center">{content}</div>
    </div>
  );
}

export default PrizeComp;
