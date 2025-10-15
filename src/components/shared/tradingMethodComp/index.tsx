import React from "react";
type MethodItem = {
  title: string;
  description?: React.ReactNode;
  logo?: React.ReactNode;
};

type Props = {
  items: MethodItem[];
};
function TradingMethodComp({ items }: Props) {
  return (
    <div className="py-10 lg:px-30 px-3 flex flex-col gap-10 my-30">
      <div className="mx-auto text-[#464646] md:text-[32px] text-[24px] font-semibold text-center">
        GIAO DỊCH NHANH CHÓNG VÀ THUẬN TIỆN
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-6">
        {items.map((item, index) => (
          <div key={index} className="p-3 flex flex-col gap-3 text-center">
            <div className="flex justify-center items-center py-[20px] px-[6px]">
              {item.logo}
            </div>
            <div className="text-[#24723B] lg:text-[24px] text-[18px] font-semibold uppercase">
              {item.title}
            </div>
            <div className="text-[#464646] lg:text-[18px] text-[14px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradingMethodComp;
