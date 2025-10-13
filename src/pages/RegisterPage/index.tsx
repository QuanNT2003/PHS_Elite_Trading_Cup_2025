import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import InputComp from "../../components/shared/inputComp";
import { X } from "lucide-react";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
  complete?: () => void;
};
export function RegisterPage({ open, setOpen, complete }: props) {
  const [account, setAccount] = useState("");
  const [errorAccount, setErrorAccount] = useState("Đã có lỗi");
  const onChangeAccount = (value: string) => {
    setAccount(value);
    setErrorAccount("");
  };

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const onChangeEmail = (value: string) => {
    setEmail(value);
    setErrorEmail("");
  };

  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const onChangePhone = (value: string) => {
    setPhone(value);
    setErrorPhone("");
  };

  const [otp, setOtp] = useState("");
  const [errorOtp, setErrorOtp] = useState("");
  const onChangeOtp = (value: string) => {
    setOtp(value);
    setErrorOtp("");
  };

  const [stepTwo, setStepTwo] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [time, setTime] = useState(90); // bắt đầu từ 60s

  // console.log(errorEmail);

  useEffect(() => {
    if (time <= 0) return; // khi hết thời gian thì dừng

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);
  useEffect(() => {
    // Khi đang ở stepTwo, nếu user thay đổi 1 trong 3 trường -> quay lại bước 1
    if (stepTwo) {
      setStepTwo(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, email, phone]);

  useEffect(() => {
    if (!stepTwo) {
      // Khi chưa tới bước 2 -> cần 3 trường
      const hasEmptyField = !(account && email && phone);
      const hasError = !!(errorAccount || errorEmail || errorPhone);
      setButtonDisable(hasEmptyField || hasError);
    } else {
      // Khi ở bước 2 -> cần đủ 4 trường
      const hasEmptyField = !(account && email && phone && otp);
      const hasError = !!(errorAccount || errorEmail || errorPhone || errorOtp);
      setButtonDisable(hasEmptyField || hasError);
    }
  }, [
    account,
    email,
    phone,
    otp,
    errorAccount,
    errorEmail,
    errorPhone,
    errorOtp,
    stepTwo,
  ]);

  useEffect(() => {
    // setAccount("");
    // setEmail("");
    // setPhone("");
    // setOtp("");
    // setErrorAccount("");
    // setErrorEmail("");
    // setErrorPhone("");
    // setErrorOtp("");
  }, [open]);

  const onClick = () => {
    if (stepTwo === false) {
      setStepTwo(true);
      setTime(90);
    } else {
      complete?.();
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-[540px] bg-white flex flex-col gap-6 p-6">
        <AlertDialogHeader className="relative">
          <AlertDialogTitle className="text-[#24723B] font-semibold text-[32px] text-center">
            ĐĂNG KÝ
          </AlertDialogTitle>
          <X
            className="absolute w-6 h-6 cursor-pointer text-[#464646] hover:text-[#46464685] right-0"
            onClick={() => setOpen?.(false)}
          />
        </AlertDialogHeader>
        <AlertDialogDescription className="hidden">
          Vui lòng nhập thông tin tài khoản.
        </AlertDialogDescription>
        <div className="flex flex-col gap-6">
          <InputComp
            value={account}
            onChange={onChangeAccount}
            title="Số tài khoản"
            error={errorAccount}
            description={
              <div>
                Số tài khoản bắt đầu bằng 022C (Ví dụ: 022C111234). Nếu chưa có
                tài khoản PHS{" "}
                <a
                  href="/rules"
                  className=" underline text-[#24723B] cursor-pointer"
                >
                  Bấm vào đây
                </a>
              </div>
            }
          />
          <InputComp
            value={email}
            onChange={onChangeEmail}
            title="Email"
            description="Là Email đăng ký tài khoản chứng khoán."
            error={errorEmail}
          />
          <InputComp
            value={phone}
            onChange={onChangePhone}
            error={errorPhone}
            title="Số điện thoại"
            description="Là số điện thoại đăng ký tài khoản chứng khoán"
          />
          {stepTwo && (
            <InputComp
              value={otp}
              onChange={onChangeOtp}
              title="Otp"
              description={
                <div>
                  Nhập số OTP vừa gửi về email đăng ký tài khoản chứng khoán
                  phía trên. Bấm gửi lại nếu bạn không nhận được sau{" "}
                  {time !== 0 ? (
                    time + "s"
                  ) : (
                    <span className=" underline text-[#24723B] cursor-pointer">
                      Gửi lại mã
                    </span>
                  )}
                </div>
              }
              error={errorOtp}
              show
            />
          )}
        </div>

        <AlertDialogFooter>
          <button
            disabled={buttonDisable}
            onClick={() => onClick()}
            className={`w-full rounded-sm py-4 px-12 text-center text-white gap-2.5 text-[20px] font-medium cursor-pointer 
           ${
             buttonDisable
               ? " bg-[#889189]"
               : " bg-[#24723B] hover:bg-[#24723b79]"
           }`}
          >
            {stepTwo ? "Tiếp theo" : "Kiểm tra"}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
