import banner_404 from "@/assets/image/banner-404.png";
import { ChevronLeft } from "lucide-react";
function NotFoundPage() {
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto p-6 my-32">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-6">
        <div className="flex flex-col gap-6">
          <div className="text-[32px] text-[#24723B]">
            Không tìm thấy trang mà bạn tìm kiếm
          </div>
          <div className=" font-normal text-[#464646] align-middle">
            Trang bạn tìm kiếm không tồn tại hoặc đã bị xóa. Vui lòng quay trở
            lại trang chủ để tiếp tục trải nghiệm các dịch vụ khác của PHS.
          </div>
          <a
            className="flex gap-3 bg-[#24723B] text-white cursor-pointer w-fit hover:bg-[#24723b9f] rounded-[4px] p-[16px] text-[18px] font-medium"
            href="/"
          >
            <ChevronLeft />
            Trở về trang chủ
          </a>
        </div>
        <div>
          <img src={banner_404} />
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
