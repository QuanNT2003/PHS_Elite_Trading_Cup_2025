import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import opening_soon from "@/assets/image/opening_soon.png";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
};

function BeforeTheEventNotifi({ open, setOpen }: props) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-white border-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#24723B] font-bold text-[20px]] text-center">
            {" "}
            CUỘC THI SẼ MỞ CỔNG ĐĂNG KÍ TỪ NGÀY 08/09 - 24/09/2025
          </AlertDialogTitle>
          <AlertDialogDescription className="hidden"></AlertDialogDescription>
          <div className="flex flex-col gap-6">
            <div className="text-center text-[18px] font-normal text-[#464646] align-middle">
              Nhanh tay đăng ký để nhận ngay voucher trị giá 100.000 VNĐ dành
              cho 100 thí sinh đăng ký tham gia sớm nhất và hợp lệ
            </div>
            <div>
              <img src={opening_soon} alt="logo" className="w-[60%] mx-auto" />
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <button
            onClick={() => setOpen?.(false)}
            className={`w-full rounded-sm py-4 px-12 text-center text-white gap-2.5 text-[20px] font-medium cursor-pointer
      bg-[#24723B] hover:bg-[#24723b79]`}
          >
            Đã hiểu
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default BeforeTheEventNotifi;
