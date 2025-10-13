import type { ReactNode } from "react";

type PrizeCompProps = {
  icon: ReactNode;
  content: ReactNode;
};

function PrizeComp({ icon, content }: PrizeCompProps) {
  return (
    <div className=" w-[388px] h-[174px] bg-[#FFF0CD] text-[#464646] py-[32px] px-[8px] rounded-[4px]">
      <div className="flex justify-center items-center mb-2">{icon}</div>
      <div className="text-center">{content}</div>
    </div>
  );
}

export default PrizeComp;
