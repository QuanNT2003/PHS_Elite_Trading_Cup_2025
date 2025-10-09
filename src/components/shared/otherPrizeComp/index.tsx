import PrizeComp from "@/components/shared/prizeComp";
type PrizeItem = {
  icon: React.ReactNode;
  content: React.ReactNode;
};

type Props = {
  prizeList: PrizeItem[];
};
function OtherPizeComp({ prizeList }: Props) {
  return (
    <div className="py-10 ">
      <div className="mx-auto text-[#464646] md:text-[24px] font-semibold lg:w-[25%] w-[50%] text-center">
        VÀ NHIỀU GIẢI THƯỞNG ĐẶC BIỆT KHÁC ĐANG CHỜ BẠN
      </div>
      <div className="flex flex-wrap mt-5 justify-center gap-5 ">
        {prizeList.map((item, index) => (
          <PrizeComp key={index} icon={item.icon} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default OtherPizeComp;
