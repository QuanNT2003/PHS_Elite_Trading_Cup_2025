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
      className="bg-cover bg-center p-10 bg-gray-50 relative"
      style={{ backgroundImage: `url(${mark_bg})` }}
    >
      <img src={dot_bg} className="absolute top-0 left-0" />
      <img src={dot_bg} className="absolute bottom-0 right-0" />
      <div className="mx-auto text-[#24723B] md:text-[32px] font-semibold lg:w-[25%] w-[50%] text-center">
        THỂ LỆ CUỘC THI
      </div>
      <div className="mx-auto w-[60%] text-center my-5 text-[#464646]">
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
