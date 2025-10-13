import dot_bg from "@/assets/image/dot_bg.png";
import mark_bg from "@/assets/image/mask_bg.png";
import uel from "@/assets/image/uel.jpg";
import phs from "@/assets/image/phs_company.png";

function OrganizationalUnitComp() {
  return (
    <div
      className="bg-cover bg-center pt-30 p-10 bg-gray-50 relative"
      style={{ backgroundImage: `url(${mark_bg})` }}
    >
      <img src={dot_bg} className="absolute top-50 left-0" />
      <img src={dot_bg} className="absolute top-150 right-0" />
      <div className="text-[#24723B] font-semibold md:text-[32px] text-center mb-5 p-5">
        GIỚI THIỆU ĐƠN VỊ TỔ CHỨC
      </div>
      <div className="lg:flex lg:justify-center gap-5 my-7">
        <img
          src={phs}
          className="lg:w-[35%] text-center my-5 lg:my-0 object-contain object-top"
        />
        <div className="lg:w-[35%] pt-6 flex flex-col gap-5">
          <div className="text-[#24723B] font-semibold md:text-[24px] mb-5">
            VỀ CÔNG TY CHỨNG KHOÁN PHÚ HƯNG (PHS)
          </div>

          <p className="font-normal text-[18px] text-[#464646]">
            Được thành lập vào năm 2006,{" "}
            <span className="text-[#24723B] font-semibold">
              Công ty Cổ phần Chứng khoán Phú Hưng (PHS){" "}
            </span>{" "}
            là một trong những công ty chứng khoán đầu tiên có vốn đầu tư nước
            ngoài tại Việt Nam. Với nền tảng công nghệ hiện đại và đội ngũ nhân
            sự giàu kinh nghiệm, PHS cung cấp giải pháp đầu tư an toàn, hiệu quả
            và phù hợp với từng khách hàng.
          </p>
          <p className="mt-4 font-normal text-[18px] text-[#464646]">
            Trong năm 2024, PHS vinh dự được vinh danh là{" "}
            <span className=" font-semibold">thành viên tiêu biểu </span> trong
            hoạt động thanh toán giao dịch chứng khoán phái sinh. Hiện nay, tổng
            vốn điều lệ tại PHS đạt hơn 2000+ tỷ VNĐ với các chi nhánh tại Hà
            Nội, Hải Phòng và TP.HCM. Tổng kết Quý 2/2025, PHS nằm trong TOP 8
            công ty có thị phần môi giới thị trường chứng khoán phái sinh lớn
            nhất.
          </p>
        </div>
      </div>
      <div className="lg:flex lg:justify-center gap-5 my-7">
        <div className="lg:w-[35%] pt-6 flex flex-col gap-5">
          <div className="text-[#24723B] font-semibold md:text-[24px] mb-5">
            LẦN HỢP TÁC VỚI UEL
          </div>

          <p className="font-normal text-[18px] text-[#464646]">
            <span className="text-[#3285DD] font-semibold">
              Trường Đại học Kinh tế - Luật (UEL)
            </span>{" "}
            là đơn vị đào tạo với sứ mạng thúc đẩy sự phát triển bền vững quốc
            gia thông qua nghiên cứu, đổi mới sáng tạo và đào tạo. UEL hướng đến
            trở thành trường đại học tiên phong về mô hình giáo dục linh hoạt,
            đa dạng, giúp sinh viên áp dụng lý thuyết và thực tiễn thông qua cơ
            hội hợp tác với các doanh nghiệp trên toàn quốc.
          </p>
          <p className="mt-4 font-normal text-[18px] text-[#464646]">
            Trong cuộc thi này, UEL phối hợp cùng PHS tạo ra sân chơi học thuật
            kết hợp đầu tư thực tế dành cho sinh viên. Đây là minh chứng cho nỗ
            lực của hai bên trong việc đào tạo thế hệ sinh viên trở thành nhà
            đầu tư trẻ bản lĩnh và thích ứng nhanh với xu hướng thị trường tài
            chính hiện đại
          </p>
        </div>
        <img
          src={uel}
          className="lg:w-[35%] text-center my-5 lg:my-0 object-contain object-top"
        />
      </div>
    </div>
  );
}

export default OrganizationalUnitComp;
