import banner_1 from "@/assets/image/banner_1.png";
import prize from "@/assets/image/prize.png";
import nexr_vector from "@/assets/image/next_vector.png";
import timeline from "@/assets/image/timeline.png";
import rule_1 from "@/assets/image/rule_1.png";
import rule_2 from "@/assets/image/rule_2.png";
import rule_3 from "@/assets/image/rule_3.png";
import rule_4 from "@/assets/image/rule_4.png";
import {
  TicketPercent,
  BriefcaseBusiness,
  Building2,
  UserCheck,
  Gift,
  CircleAlert,
} from "lucide-react";
import { useState } from "react";
import InputSearchComp from "@/components/shared/inputSearchComp";
import TableRanking from "@/components/shared/tableRanking";
import RankSearchResultComp from "@/components/shared/rankSearchResultComp";
import OrganizationalUnitComp from "@/components/shared/organizationalUnit";
import ContestRulesComp from "@/components/shared/constestRulesComp";
import OtherPizeComp from "@/components/shared/otherPrizeComp";
import IntroduceComp from "@/components/shared/introduceComp";
const prizeList = [
  {
    icon: <TicketPercent stroke="#007A33" size={40} />,
    content: (
      <div className="text-[#464646] font-normal">
        Voucher trị giá <span className="font-semibold">100.000 VND</span> cho{" "}
        <span className="font-semibold"> 100 lượt đăng ký hợp lệ đầu tiên</span>
      </div>
    ),
  },
  {
    icon: <BriefcaseBusiness stroke="#007A33" size={40} />,
    content: (
      <div className="text-[#464646] font-normal">
        <span className="font-semibold"> Top 5 </span>
        thí sinh vào Vòng Chung Kết sẽ có cơ hội
        <span className="font-semibold"> thực tập tại </span>
        <span className="font-semibold text-[#24723B]">
          Chứng Khoán Phú Hưng
        </span>
      </div>
    ),
  },
  {
    icon: <Building2 stroke="#007A33" size={40} />,
    content: (
      <div className="text-[#464646] font-normal">
        Cơ hội tham gia
        <span className="font-semibold"> Company Tour </span> tại văn phòng hội
        sở{" "}
        <span className="font-semibold text-[#24723B]">
          Chứng Khoán Phú Hưng
        </span>
      </div>
    ),
  },
  {
    icon: <Gift stroke="#007A33" size={40} />,
    content: (
      <div className="text-[#464646] font-normal">
        Nhiều <span className="font-semibold">quà tặng hấp dẫn </span> tại
        <span className="font-semibold"> đêm Chung Kết</span>
      </div>
    ),
  },
  {
    icon: <UserCheck stroke="#007A33" size={40} />,
    content: (
      <div className="text-[#464646] font-normal">
        Giải thưởng cho trường có{" "}
        <span className="font-semibold">thí sinh đăng ký tham gia hợp lệ</span>{" "}
        cho nhiều nhất
      </div>
    ),
  },
];
const items = [
  {
    id: "one",
    number: "01",
    title: "GIÁ TRỊ TÀI SẢN RÒNG",
    description: (
      <div>
        Thí sinh cần giữ{" "}
        <span className="font-semibold">
          {" "}
          giá trị tài sản ròng (NAV) tối thiểu 5.000.000 VND
        </span>{" "}
        để đến hết ngày đăng ký cuối cùng để đủ điều kiện tham gia cuộc thi.
      </div>
    ),
    image: <img src={rule_1} className="w-[60%]" />,
  },
  {
    id: "two",
    number: "02",
    title: "TÀI KHOẢN GIAO DỊCH",
    subtitle: "Thí sinh đăng ký và giao dịch trên tài khoản thường",
    description: (
      <div>
        Thí sinh đăng ký và giao dịch trên tài khoản thường,{" "}
        <span className="font-semibold"> KHÔNG</span> tham gia trên tài khoản
        margin.
      </div>
    ),

    image: <img src={rule_2} className="w-[60%]" />,
  },
  {
    id: "three",
    number: "03",
    title: "NỘP VÀ RÚT TIỀN",
    subtitle: "Thí sinh đăng ký và giao dịch trên tài khoản thường",
    description: (
      <div>
        Thí sinh <span className="font-semibold"> KHÔNG</span> được thực hiện
        giao dịch
        <span className="font-semibold"> nạp/ rút tiền</span> trên tài khoản thi
        đấu trong suốt thời gian tham gia cuộc thi.
      </div>
    ),

    image: <img src={rule_3} className="w-[60%]" />,
  },
  {
    id: "four",
    number: "04",
    title: "VÒNG QUAY VỐN",
    subtitle: "Thí sinh đăng ký và giao dịch trên tài khoản thường",
    description: (
      <div>
        Tổng giá trị giao dịch khớp lệnh mua trong suốt thời gian thi đấu của
        thí sinh cần đạt tối thiểu bằng tổng giá trị NAV tại thời điểm hết ngày
        đăng ký cuối cùng
      </div>
    ),

    image: <img src={rule_4} className="w-[60%]" />,
  },
];

const rankingItem = [
  {
    rank: 1,
    nickname: "MinhKha",
    account: "022C111G5W",
    university: "Đại học Mỹ thuật Công nghiệp Á Châu (Cơ sở TP.HCM)",
    profit: 10,
    change: 2,
  },
  {
    rank: 2,
    nickname: "QuynhDao",
    account: "022C1297DG",
    university: "Đại học Gia Định",
    profit: -3,
    change: -1,
  },
  {
    rank: 3,
    nickname: "BaoKhanh",
    account: "022C122G46",
    university: "Đại học Hùng Vương Thành phố Hồ Chí Minh",
    profit: 5,
    change: 1,
  },
  {
    rank: 4,
    nickname: "HaMy",
    account: "21353623",
    university:
      "Đại học Công nghệ Thông tin - ĐH Quốc gia Thành phố Hồ Chí Minh ",
    profit: 0,
    change: 1,
  },
];
function HomePage() {
  const [serach, setSearch] = useState("");
  return (
    <div>
      {/* banner */}
      <img src={banner_1} className="" />

      {/* introduce */}
      <IntroduceComp />

      {/* price */}
      <img src={prize} className="w-full" />

      <img src={nexr_vector} className="mx-auto pb-4" />

      {/*other price */}
      <OtherPizeComp prizeList={prizeList} />

      {/* contest rules */}
      <ContestRulesComp items={items} />

      {/*timeline */}
      <div className="py-10">
        <div className="mx-auto text-[#464646] md:text-[32px] font-semibold lg:w-[25%] w-[50%] text-center leading-10 my-5">
          HÀNH TRÌNH ĐẦU TƯ TẠI{" "}
          <span className="text-[#24723B]">PHS ELITE TRADING CUP</span>{" "}
          <span className="text-[#FF8133]">2025</span>
        </div>
        <div className="flex justify-center">
          <img src={timeline} />
        </div>
        <div className="lg:ms-[20%] ms-[5%]">
          <p>(*) Thời gian có thể thay đổi dựa theo tình hình thực tế</p>
          <p>
            (**) BTC sẽ yêu cầu TOP 5 thí sinh cung cấp thông tin để xác minh
            trước khi trao giải
          </p>
        </div>
      </div>

      {/* ranking */}
      <div className="lg:mx-[10%] mx-[5%] flex flex-col gap-10 my-30">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="gap-3 flex flex-col">
            <div className=" text-[#24723B] md:text-[32px] font-semibold">
              BẢNG XẾP HẠNG
            </div>
            <div className="flex rounded-sm p-3 gap-3 bg-[#FFF0CD] text-[16px]">
              <CircleAlert />
              Bảng xếp hạng tạm tính được cập nhật đến hết ngày 02/07/2025
            </div>
          </div>

          <div className="gap-2 flex flex-col">
            <InputSearchComp
              value={serach}
              onChange={setSearch}
              placeholder="Nhập mã tài khoản"
              description="Số tài khoản bắt đầu bằng 022C (Ví dụ: 022C111234)."
            />
          </div>
        </div>
        <div className="overflow-x-auto ">
          <RankSearchResultComp
            rank={11}
            nickname="NgocMai"
            account="022C154134"
            university="Đại học Mỹ thuật Công nghiệp Á Châu (Cơ sở TP.HCM)"
            profit={-1}
            change={-1}
          />
        </div>
        <TableRanking data={rankingItem} />
      </div>

      {/*organizational unit */}
      <OrganizationalUnitComp />
    </div>
  );
}

export default HomePage;
