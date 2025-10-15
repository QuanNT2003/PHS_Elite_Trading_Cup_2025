import banner_1 from "@/assets/image/banner_1.png";
import prize from "@/assets/image/prize.png";
import nexr_vector from "@/assets/image/next_vector.png";
import timeline from "@/assets/image/timeline.png";
import rule_1 from "@/assets/image/rule_1.png";
import rule_2 from "@/assets/image/rule_2.png";
import rule_3 from "@/assets/image/rule_3.png";
import rule_4 from "@/assets/image/rule_4.png";
import xpro_web from "@/assets/image/phs_elite_xpro.png";
import qr_mobile_app from "@/assets/image/qr_mobile_app.png";
import {
  TicketPercent,
  BriefcaseBusiness,
  Building2,
  UserCheck,
  Gift,
  CircleAlert,
} from "lucide-react";
import { useEffect, useState } from "react";
import InputSearchComp from "@/components/shared/inputSearchComp";
import TableRanking from "@/components/shared/tableRanking";
import RankSearchResultComp from "@/components/shared/rankSearchResultComp";
import OrganizationalUnitComp from "@/components/shared/organizationalUnit";
import ContestRulesComp from "@/components/shared/constestRulesComp";
import OtherPizeComp from "@/components/shared/otherPrizeComp";
import IntroduceComp from "@/components/shared/introduceComp";
import TradingMethodComp from "@/components/shared/tradingMethodComp";

interface AccountItem {
  rank: number;
  nickname: string;
  account: string;
  university: string;
  profit: number;
  change: number;
}
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
        nhiều nhất
      </div>
    ),
  },
];
const items = [
  {
    id: "one",
    number: "01",
    title: "TÀI KHOẢN THAM GIA",
    description: (
      <div>
        Thí sinh đăng ký tài khoản tham gia thi đấu mở tại Chứng khoán Phú Hưng{" "}
        <a
          target="_blank"
          href="https://www.phs.vn"
          className="text-[#24723B] underline cursor-pointer font-bold"
        >
          TẠI ĐÂY
        </a>
        . Thí sinh đăng ký và giao dịch trên tài khoản thường,{" "}
        <span className="font-semibold">
          {" "}
          KHÔNG tham gia trên tài khoản Margin.
        </span>{" "}
      </div>
    ),
    image: <img src={rule_2} className="w-[60%]" />,
  },
  {
    id: "two",
    number: "02",
    title: "NỘP VÀ RÚT TIỀN",
    subtitle: "Thí sinh đăng ký và giao dịch trên tài khoản thường",
    description: (
      <div>
        Thí sinh cần hoàn tất việc
        <span className="font-semibold"> NỘP TIỀN</span> vào tài khoản trước
        ngày 03/12/2025 để tham gia thi đấu. Kể từ ngày 04/12, thí sinh
        <span className="font-semibold"> KHÔNG</span> được nộp thêm hoặc rút
        tiền để tránh vi phạm điều lệ thi đấu.
      </div>
    ),

    image: <img src={rule_3} className="w-[60%]" />,
  },
  {
    id: "three",
    number: "03",
    title: "CHUYỂN CHỨNG KHOÁN",
    subtitle: "Thí sinh đăng ký và giao dịch trên tài khoản thường",
    description: (
      <div>
        Trong thời gian thi đấu, thí sinh không được chuyển thêm chứng khoán vào
        tài khoản tham gia thi đấu. Giao dịch phải là giao dịch khớp lệnh trên
        hệ thống, giao dịch thỏa thuận sẽ không được chấp nhận trong cuộc thi.
      </div>
    ),

    image: <img src={rule_1} className="w-[60%]" />,
  },
  {
    id: "four",
    number: "04",
    title: "CHỨNG KHOÁN GIAO DỊCH",
    subtitle: "Thí sinh đăng ký và giao dịch trên tài khoản thường",
    description: (
      <div>
        Áp dụng với tất cả các mã chứng khoán cơ sở giao dịch bao gồm: Cổ phiếu,
        chứng quyền có bảo đảm niêm yết trên HOSE, HNX, UPCOM, không áp dụng với
        các sản phẩm phái sinh như Hợp đồng tương lai, trái phiếu, chứng chỉ quỹ
        ETF..
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
  {
    rank: 5,
    nickname: "MinhChi",
    account: "022C111G5W",
    university: "Đại học Mỹ thuật Công nghiệp Á Châu (Cơ sở TP.HCM)",
    profit: 10,
    change: 2,
  },
  {
    rank: 6,
    nickname: "LyKhanh",
    account: "022C1297DG",
    university: "Đại học Gia Định",
    profit: -3,
    change: -1,
  },
  {
    rank: 7,
    nickname: "HoangNam",
    account: "022C122G46",
    university: "Đại học Hùng Vương Thành phố Hồ Chí Minh",
    profit: 5,
    change: 1,
  },
  {
    rank: 8,
    nickname: "HaMy",
    account: "21353623",
    university:
      "Đại học Công nghệ Thông tin - ĐH Quốc gia Thành phố Hồ Chí Minh ",
    profit: 0,
    change: 1,
  },
  {
    rank: 9,
    nickname: "PhongNam",
    account: "022C122G46",
    university: "Đại học Hùng Vương Thành phố Hồ Chí Minh",
    profit: 5,
    change: 1,
  },
  {
    rank: 10,
    nickname: "MaiHa",
    account: "21353623",
    university:
      "Đại học Công nghệ Thông tin - ĐH Quốc gia Thành phố Hồ Chí Minh ",
    profit: 0,
    change: 1,
  },
];

const searchItem = {
  rank: 11,
  nickname: "MyNguyen",
  account: "022C154134",
  university: "Đại học Mỹ thuật Công nghiệp Á Châu (Cơ sở TP.HCM)",
  profit: 0,
  change: 5,
};

const tradingMethodItem = [
  {
    title: "Web trading PHS Elite Xpro",
    logo: <img src={xpro_web} className="h-[120px]" />,
    description: (
      <div>
        Thực hiện giao dịch{" "}
        <a
          target="_blank"
          href="https://xpro.phs.vn"
          className="text-[#24723B] underline cursor-pointer font-semibold"
        >
          tại đây
        </a>
      </div>
    ),
  },
  {
    title: "Ứng dụng PHS Elite trading",
    logo: <img src={qr_mobile_app} className="h-[120px]" />,
    description: (
      <div>
        Quét QR để tải app hoặc click{" "}
        <a
          target="_blank"
          href="https://xpro.phs.vn"
          className="text-[#24723B] underline cursor-pointer font-semibold"
        >
          tại đây
        </a>
      </div>
    ),
  },
];
function HomePage() {
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState<AccountItem>();

  useEffect(() => {
    setSearchResult(searchItem);
    setSearchResult(undefined);
  }, []);
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

      {/* trading method */}
      <TradingMethodComp items={tradingMethodItem} />

      {/*timeline */}
      <div className="py-10">
        <div className="mx-auto text-[#464646] md:text-[32px] text-[24px] font-semibold lg:w-[30%] w-[50%] text-center leading-10 mb-10">
          HÀNH TRÌNH ĐẦU TƯ TẠI{" "}
          <span className="text-[#24723B]">PHS ELITE TRADING CUP</span>{" "}
          <span className="text-[#FF8133]">2025</span>
        </div>
        <div className="flex justify-center">
          <img src={timeline} />
        </div>
        <div className="lg:ms-[15%] ms-[5%]">
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
            <div className=" text-[#24723B] md:text-[32px] text-[24px] font-semibold">
              BẢNG XẾP HẠNG
            </div>
            <div className="flex rounded-sm p-3 gap-3 bg-[#FFF0CD] text-[16px]">
              <CircleAlert />
              Bảng xếp hạng tạm tính được cập nhật đến hết ngày 02/07/2025
            </div>
          </div>

          <div className="gap-2 flex flex-col">
            <InputSearchComp
              value={search}
              onChange={setSearch}
              placeholder="Nhập mã tài khoản"
              description="Số tài khoản bắt đầu bằng 022C (Ví dụ: 022C111234)."
            />
          </div>
        </div>
        {searchResult ? (
          <div className="overflow-x-auto ">
            <RankSearchResultComp searchResult={searchItem} />
          </div>
        ) : (
          <div></div>
        )}

        <TableRanking data={rankingItem} />
      </div>

      {/*organizational unit */}
      <OrganizationalUnitComp />
    </div>
  );
}

export default HomePage;
