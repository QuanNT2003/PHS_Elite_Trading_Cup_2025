import dot_bg from "@/assets/image/dot_bg.png";
import phs_cup_logo from "@/assets/image/phs_elite_cup_logo.png";

function IntroduceComp() {
  return (
    <div className="relative my-16 py-10">
      <img src={dot_bg} className="absolute top-0 left-0" />
      <img src={dot_bg} className="absolute bottom-0 right-0" />
      <div
        className="h-[160px] lg:w-[340px] w-[60%] bg-[#066B4D] absolute right-1 lg:right-30 top-2 "
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
      <div
        className="lg:w-[30%] w-[90%] h-[150px] bg-[#066B4D] absolute bottom-0 lg:bottom-5 lg:right-[25%] right-[5%]"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
        }}
      ></div>

      <div className="flex lg:justify-center lg:items-top gap-[40px] lg:flex-row flex-col relative">
        <video
          className="lg:w-[38%] w-full h-[360px] rounded-lg shadow-lg px-5 lg:p-0 my-10 lg:my-0"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        <div className="lg:w-[38%] w-full min-h-[400px] relative text-[18px] text-[#464646]  ">
          <img
            src={phs_cup_logo}
            className="absolute top-[-30px] left-0 w-[220px]"
          />

          <div className="bg-white px-3 pb-4 pt-16 flex flex-col gap-3">
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
            <p className="font-normal">
              Thí sinh tham gia sẽ được cung cấp nền tảng giao dịch hiện đại từ
              web và app, sự hỗ trợ từ chuyên gia tư vấn và cơ hội rèn luyện kỹ
              năng ra quyết định dưới áp lực thực tế.{" "}
              <span className="text-[#FF8133]">Đăng ký ngay </span> hôm nay và
              trở thành một phần của đấu trường đầu tư đỉnh cao!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroduceComp;
