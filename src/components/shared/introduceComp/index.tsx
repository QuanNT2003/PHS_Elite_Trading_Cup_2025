import dot_bg from "@/assets/image/dot_bg.png";
import phs_cup_logo from "@/assets/image/phs_elite_cup_logo.png";

function IntroduceComp() {
  return (
    <div className="relative my-16 py-10">
      <img src={dot_bg} className="absolute top-0 left-0" />
      <img src={dot_bg} className="absolute bottom-0 right-0" />
      <div className="lg:flex lg:justify-center lg:items-center gap-[40px] relative">
        <video
          className="lg:w-[40%] w-full md:h-[400px] rounded-lg shadow-lg px-5 lg:p-0 my-10 lg:my-0"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        <div className="lg:w-[40%] w-full h-[400px] relative pt-18 text-[18px] text-[#464646] px-5 lg:px-0 my-16 lg:my-0 ">
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
            tổ chức. Với mục tiêu tìm kiếm và ươm mầm thế hệ nhà đầu tư trẻ bản
            lĩnh, cuộc thi mang đến sân chơi chuyên nghiệp, trực tiếp trải
            nghiệm đầu tư với tài khoản thật và cạnh tranh công bằng.
          </p>
          <p className="font-normal mt-2">
            Thí sinh tham gia sẽ được cung cấp nền tảng giao dịch hiện đại từ
            web và app, sự hỗ trợ từ chuyên gia tư vấn và cơ hội rèn luyện kỹ
            năng ra quyết định dưới áp lực thực tế.{" "}
            <span className="text-[#FF8133]">Đăng ký ngay </span> hôm nay và trở
            thành một phần của đấu trường đầu tư đỉnh cao!
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroduceComp;
