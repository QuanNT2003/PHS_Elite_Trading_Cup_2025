import faceIcon from "@/assets/image/face_icon.png";
import mailIcon from "@/assets/image/mail_icon.png";
import callIcon from "@/assets/image/phone_icon.png";
import qr_img from "@/assets/image/qr.png";
import gp_img from "@/assets/image/google_play.png";
import as_img from "@/assets/image/app_store.png";
import footer_bg from "@/assets/image/footer_bg.png";
import phs_logo from "@/assets/image/phs_logo.png";
import { SendHorizontal, Phone, Mail, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";
const connectItem = [
  {
    img: faceIcon,
    title: "Fanpage cuộc thi",
    content: "PHS Elite Trading Cup",
  },
  {
    img: faceIcon,
    title: "Fanpage PHS",
    content: "Chứng khoán Phú Hưng - PHS",
  },
  { img: mailIcon, title: "Email", content: "support@phs.vn" },
];
const callItem = [
  {
    img: callIcon,
    title: "Hỗ trợ mở tài khoản và giao dịch",
    content: "1900 25 23 58",
  },
  {
    img: callIcon,
    title: "Hỗ trợ thông tin về cuộc thi",
    content: "...",
  },
];
function FooterComp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-[498px] text-white pt-[70px] relative ">
      <div
        className="absolute h-[50px] w-[50px] bg-[#BE942D] text-white rounded-full top-11 right-3 flex justify-center items-center cursor-pointer"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-[25px]" />
      </div>
      <div
        className="block lg:flex lg:justify-between 
        bg-cover bg-center bg-no-repeat 
        text-white px-[5%] py-10 
        overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 89, 38, 0.92), rgba(12, 89, 38, 0.92)), url(${footer_bg})`,
        }}
      >
        <div className="bg-[#0C5926] rounded-[8px] p-6 lg:w-[270px] w-full text-white flex flex-col justify-between shadow-lg mb-6 lg:mb-0 lg:absolute lg:top-4 md:left-[5%]">
          <img
            src={phs_logo}
            alt="Phu Hung Securities"
            className="w-[120px] mb-4"
          />
          <div className="font-semibold">Trụ sở:</div>
          <div className="text-[14px] leading-relaxed mb-4">
            <p>Tầng 21, Phú Mỹ Hưng Tower,</p>
            <p>08 Hoàng Văn Thái, Phường Tân Phú,</p>
            <p>TP. Hồ Chí Minh</p>
          </div>
          <div className="space-y-2 text-[14px]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 " />
              <span>+84 28 5411 88 55</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 " />
              <span>support@phs.vn</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 " />
              <span>www.phs.vn</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[270px]"></div>
        <div className="my-4">
          <div className=" font-semibold text-[20px] mb-5">
            Liên hệ với chúng tôi
          </div>
          <div className="text-[#D1D5DB]">
            {connectItem.map((item, index) => (
              <div className="flex my-[6px] cursor-pointer" key={index}>
                <img src={item.img} className="h-[20px] w-[20px] me-2" />
                <div>
                  <div className="font-semibold text-[14px]">{item.title}</div>
                  <div className="font-normal text-[14px]">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-4">
          <div className=" font-semibold text-[20px] mb-5">Liên hệ hotline</div>
          <div className="text-[#D1D5DB]">
            {callItem.map((item, index) => (
              <div className="flex my-[6px] cursor-pointer" key={index}>
                <img src={item.img} className="h-[20px] w-[20px] me-2" />
                <div>
                  <div className="font-semibold text-[14px]">{item.title}</div>
                  <div className="font-normal text-[14px]">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-4">
          <div className=" font-semibold text-[20px] mb-5">
            Tải app PHS-Mobile Trading
          </div>
          <div className="flex mb-5">
            <img
              src={qr_img}
              className="h-[116px] w-[116px] me-3 cursor-pointer"
            />
            <div>
              <img
                src={as_img}
                className="h-[48px] w-[165px] mb-5 cursor-pointer"
              />
              <img src={gp_img} className="h-[48px] w-[165px] cursor-pointer" />
            </div>
          </div>
          <div className=" font-semibold text-[20px] mb-5">
            Đăng ký nhận tin
          </div>
          <div className="flex">
            <Input className="bg-white text-[#6B7280] rounded-r-none p-1.5 " />
            <div className="h-48px w-[68px] flex justify-center items-center cursor-pointer bg-[#BE942D] rounded-r-md">
              <SendHorizontal className=" w-[15px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[53px] flex justify-center items-center bg-[#0C5926EB]">
        Copyright ⓒ 2022 Phu Hung Securities
      </div>
    </div>
  );
}

export default FooterComp;
