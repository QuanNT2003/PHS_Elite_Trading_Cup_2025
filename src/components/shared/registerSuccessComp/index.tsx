import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import logo from "@/assets/image/phs_elite_cup_logo.png";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
};
function RegisterSuccessComp({ open, setOpen }: props) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-[540px] bg-white flex flex-col gap-6 p-6">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#24723B] font-bold text-[20px]] text-center">
            CHÚC MỪNG BẠN ĐÃ ĐĂNG KÝ THAM GIA CUỘC THI PHS ELITE TRADING CUP{" "}
            <span className="text-[#FF8133]">2025</span> THÀNH CÔNG
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="flex flex-col gap-6">
          <div className="text-center text-[18px] font-normal">
            Vui lòng giữ số dư tài khoản tối thiểu{" "}
            <span className="font-semibold">5.000.000 VNĐ</span> đến hết ngày
            <span className="font-semibold"> 24/09/2025 </span> để tham gia cuộc
            thi
          </div>
          <div>
            <img src={logo} alt="logo" className="w-[80%] mx-auto" />
          </div>
        </AlertDialogDescription>

        <div className="flex flex-col gap-[12px]">
          <a
            href="/rules"
            className={`w-full rounded-sm py-4 px-12 text-center text-white gap-2.5 text-[20px] font-medium cursor-pointer 
          bg-[#24723B] hover:bg-[#24723b79]`}
          >
            Thể lệ cuộc thi
          </a>
          <div className="flex justify-center items-center">
            <a
              href="/"
              className="text-[#464646] font-medium text-[14px] underline"
            >
              Quay về trang chủ
            </a>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RegisterSuccessComp;
