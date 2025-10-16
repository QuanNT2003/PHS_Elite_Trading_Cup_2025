import dot_bg from "@/assets/image/dot_bg.png";
import mark_bg from "@/assets/image/mask_bg.png";
import RuleCardComp from "@/components/shared/ruleCardComp";
type RuleItem = {
  id: string;
  number?: string; // ví dụ: "01"
  title: string;
  description?: React.ReactNode;
  // bạn có thể truyền React node cho image (SVG hoặc <img />)
  image?: React.ReactNode;
};

type Props = {
  items: RuleItem[];
};

function ContestRulesComp({ items }: Props) {
  return (
    <div
      className="bg-cover bg-center md:p-25 p-10 bg-gray-50 relative flex flex-col gap-10"
      style={{ backgroundImage: `url(${mark_bg})` }}
    >
      <img src={dot_bg} className="absolute top-50 left-0" />
      <img src={dot_bg} className="absolute bottom-30 right-0" />
      <div className="mx-auto text-[#24723B] text-[32px] font-semibold text-center">
        THỂ LỆ CUỘC THI
      </div>
      <div className="mx-auto w-[60%] text-center text-[#464646]">
        Việc nắm vững thể lệ cuộc thi sẽ giúp thí sinh tự tin hơn trong quá
        trình thi đấu cũng như tránh mắc phải các sai lầm đáng tiếc, dẫn đến
        việc bị loại sớm khỏi cuộc thi.{" "}
        <a href="/rules" className="text-[#24723B] underline font-semibold">
          THỂ LỆ CHI TIẾT XEM TẠI ĐÂY
        </a>
      </div>
      <RuleCardComp items={items} />
    </div>
  );
}

export default ContestRulesComp;
