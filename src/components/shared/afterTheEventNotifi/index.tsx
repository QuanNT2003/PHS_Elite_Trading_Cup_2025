import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import logo from "@/assets/image/phs_elite_cup_logo.png";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
};

function AfterTheEventNotifi({ open, setOpen }: props) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-[540px] bg-white flex flex-col gap-6 p-6 border-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#24723B] font-bold text-[20px]] text-center">
            ĐÃ HẾT THỜI GIAN ĐĂNG KÝ THAM GIA CUỘC THI PHS ELITE TRADING CUP{""}
            <span className="text-[#FF8133]">2025</span>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="hidden"></AlertDialogDescription>
        <div className="flex flex-col gap-6">
          <div className="text-center text-[18px] font-normal">
            Hẹn gặp các bạn vào mùa sau
          </div>
          <div>
            <img src={logo} alt="logo" className="w-[80%] mx-auto" />
          </div>
        </div>

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

export default AfterTheEventNotifi;
