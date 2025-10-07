import banner_1 from "@/assets/image/banner_1.png";
import dot_bg from "@/assets/image/dot_bg.png";
import phs_cup_logo from "@/assets/image/phs_elite_cup_logo.png";
import prize from "@/assets/image/prize.png";
import nexr_vector from "@/assets/image/next_vector.png";
import mark_bg from "@/assets/image/mask_bg.png";
import uel from "@/assets/image/uel.jpg";
import phs from "@/assets/image/phs_company.png";
import timeline from "@/assets/image/timeline.png";
import {
  TicketPercent,
  BriefcaseBusiness,
  Building,
  UserCheck,
  Gift,
} from "lucide-react";
import PrizeComp from "@/components/shared/prizeComp";
const prizeList = [
  {
    icon: <TicketPercent stroke="#007A33" size={40} />,
    content: (
      <p className="text-[#464646] font-normal">
        Voucher trị giá <span className="font-semibold">100.000 VND</span> cho{" "}
        <span className="font-semibold"> 100 lượt đăng ký hợp lệ đầu tiên</span>
      </p>
    ),
  },
  {
    icon: <BriefcaseBusiness stroke="#007A33" size={40} />,
    content: (
      <p className="text-[#464646] font-normal">
        <span className="font-semibold"> Top 5 </span>
        thí sinh vào Vòng Chung Kết sẽ có cơ hội
        <span className="font-semibold"> thực tập tại </span>
        <span className="font-semibold text-[#24723B]">
          Chứng Khoán Phú Hưng
        </span>
      </p>
    ),
  },
  {
    icon: <Building stroke="#007A33" size={40} />,
    content: (
      <p className="text-[#464646] font-normal">
        Cơ hội tham gia
        <span className="font-semibold"> Company Tour </span> tại văn phòng hội
        sở{" "}
        <span className="font-semibold text-[#24723B]">
          Chứng Khoán Phú Hưng
        </span>
      </p>
    ),
  },
  {
    icon: <UserCheck stroke="#007A33" size={40} />,
    content: (
      <p className="text-[#464646] font-normal">
        Nhiều <span className="font-semibold">quà tặng hấp dẫn </span> tại
        <span className="font-semibold"> đêm Chung Kết</span>
      </p>
    ),
  },
  {
    icon: <Gift stroke="#007A33" size={40} />,
    content: (
      <p className="text-[#464646] font-normal">
        Giải thưởng cho trường có{" "}
        <span className="font-semibold">thí sinh đăng ký tham gia hợp lệ</span>{" "}
        cho nhiều nhất
      </p>
    ),
  },
];
function HomePage() {
  return (
    <div>
      {/* banner */}
      <img src={banner_1} className="" />

      {/* introduce */}
      <div className="relative my-16 py-10">
        <img src={dot_bg} className="absolute top-0 left-0" />
        <img src={dot_bg} className="absolute bottom-0 right-0" />
        <div className="lg:flex lg:justify-center lg:items-center gap-[40px] relative">
          <video
            className="lg:w-[40%] w-full h-[400px] rounded-lg shadow-lg px-5 lg:p-0 my-10 lg:my-0"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <div className="lg:w-[40%] w-full h-[400px] relative pt-18 text-[18px] text-[#464646] px-5 lg:px-0 my-10 lg:my-0 ">
            <img
              src={phs_cup_logo}
              className="absolute top-[-90px] left-0 w-[220px]"
            />

            <p className="font-normal">
              <span className="text-[#24723B]">PHS Elite Trading Cup </span>
              <span className="text-[#FF8133]">2025 </span>
              là cuộc thi đầu tư chứng khoán thực chiến dành riêng cho sinh viên
              trên toàn quốc, do{" "}
              <span className="text-[#24723B]">
                Công ty Chứng khoán Phú Hưng (PHS)
              </span>{" "}
              phối hợp cùng{" "}
              <span className="text-[#3285DD]">
                Trường Đại học Kinh tế - Luật, Đại học Quốc gia Thành phố Hồ Chí
                Minh (UEL)
              </span>{" "}
              tổ chức. Với mục tiêu tìm kiếm và ươm mầm thế hệ nhà đầu tư trẻ
              bản lĩnh, cuộc thi mang đến sân chơi chuyên nghiệp, trực tiếp trải
              nghiệm đầu tư với tài khoản thật và cạnh tranh công bằng.
            </p>
            <p className="font-normal mt-2">
              Thí sinh tham gia sẽ được cung cấp nền tảng giao dịch hiện đại từ
              web và app, sự hỗ trợ từ chuyên gia tư vấn và cơ hội rèn luyện kỹ
              năng ra quyết định dưới áp lực thực tế.{" "}
              <span className="text-[#FF8133]">Đăng ký ngay </span> hôm nay và
              trở thành một phần của đấu trường đầu tư đỉnh cao!
            </p>
          </div>
        </div>
      </div>

      {/* price */}
      <img src={prize} className="w-full" />

      <img src={nexr_vector} className="mx-auto py-10" />

      {/*other price */}
      <div className="py-10 ">
        <div className="mx-auto text-[#464646] text-[24px] font-semibold lg:w-[25%] w-[50%] text-center">
          VÀ NHIỀU GIẢI THƯỞNG ĐẶC BIỆT KHÁC ĐANG CHỜ BẠN
        </div>
        <div className="flex flex-wrap mt-5 justify-center gap-5 ">
          {prizeList.map((item, index) => (
            <PrizeComp key={index} icon={item.icon} content={item.content} />
          ))}
        </div>
      </div>

      {/* contest rules */}
      <div
        className="bg-cover bg-center p-10 bg-gray-50 relative"
        style={{ backgroundImage: `url(${mark_bg})` }}
      >
        <img src={dot_bg} className="absolute top-0 left-0" />
        <img src={dot_bg} className="absolute bottom-0 right-0" />
        <div className="mx-auto text-[#24723B] text-[32px] font-semibold lg:w-[25%] w-[50%] text-center">
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
      </div>

      {/*timeline */}
      <div className="py-10">
        <div className="mx-auto text-[#464646] text-[32px] font-semibold lg:w-[25%] w-[50%] text-center leading-10 my-5">
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
      {/*organizational unit */}
      <div
        className="bg-cover bg-center p-10 bg-gray-50 relative"
        style={{ backgroundImage: `url(${mark_bg})` }}
      >
        <img src={dot_bg} className="absolute top-0 left-0" />
        <img src={dot_bg} className="absolute bottom-0 right-0" />
        <div className="text-[#24723B] font-semibold text-[32px] text-center mb-5 p-5">
          GIỚI THIỆU ĐƠN VỊ TỔ CHỨC
        </div>
        <div className="lg:flex lg:justify-center gap-5 my-7">
          <img src={phs} className="lg:w-[35%] text-center my-5 lg:my-0 " />
          <div className="lg:w-[35%] ">
            <div className="text-[#24723B] font-semibold text-[24px] mb-5">
              VỀ CÔNG TY CHỨNG KHOÁN PHÚ HƯNG (PHS)
            </div>
            <div>
              <p className="font-normal text-[18px] text-[#464646]">
                Được thành lập vào năm 2006,{" "}
                <span className="text-[#24723B] font-semibold">
                  Công ty Cổ phần Chứng khoán Phú Hưng (PHS){" "}
                </span>{" "}
                là một trong những công ty chứng khoán đầu tiên có vốn đầu tư
                nước ngoài tại Việt Nam. Với nền tảng công nghệ hiện đại và đội
                ngũ nhân sự giàu kinh nghiệm, PHS cung cấp giải pháp đầu tư an
                toàn, hiệu quả và phù hợp với từng khách hàng.
              </p>
              <p className="mt-4 font-normal text-[18px] text-[#464646]">
                Trong năm 2024, PHS vinh dự được vinh danh là{" "}
                <span className=" font-semibold">thành viên tiêu biểu </span>{" "}
                trong hoạt động thanh toán giao dịch chứng khoán phái sinh. Hiện
                nay, tổng vốn điều lệ tại PHS đạt hơn 2000+ tỷ VNĐ với các chi
                nhánh tại Hà Nội, Hải Phòng và TP.HCM. Tổng kết Quý 2/2025, PHS
                nằm trong TOP 8 công ty có thị phần môi giới thị trường chứng
                khoán phái sinh lớn nhất.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center gap-5 my-7">
          <div className="lg:w-[35%]">
            <div className="text-[#24723B] font-semibold text-[24px] mb-5">
              LẦN HỢP TÁC VỚI UEL
            </div>
            <div>
              <p className="font-normal text-[18px] text-[#464646]">
                <span className="text-[#3285DD] font-semibold">
                  Trường Đại học Kinh tế - Luật (UEL)
                </span>{" "}
                là đơn vị đào tạo với sứ mạng thúc đẩy sự phát triển bền vững
                quốc gia thông qua nghiên cứu, đổi mới sáng tạo và đào tạo. UEL
                hướng đến trở thành trường đại học tiên phong về mô hình giáo
                dục linh hoạt, đa dạng, giúp sinh viên áp dụng lý thuyết và thực
                tiễn thông qua cơ hội hợp tác với các doanh nghiệp trên toàn
                quốc.
              </p>
              <p className="mt-4 font-normal text-[18px] text-[#464646]">
                Trong cuộc thi này, UEL phối hợp cùng PHS tạo ra sân chơi học
                thuật kết hợp đầu tư thực tế dành cho sinh viên. Đây là minh
                chứng cho nỗ lực của hai bên trong việc đào tạo thế hệ sinh viên
                trở thành nhà đầu tư trẻ bản lĩnh và thích ứng nhanh với xu
                hướng thị trường tài chính hiện đại
              </p>
            </div>
          </div>
          <img src={uel} className="lg:w-[35%] text-center my-5 lg:my-0  " />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
