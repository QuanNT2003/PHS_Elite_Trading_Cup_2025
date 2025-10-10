import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import InputComp from "../../components/shared/inputComp";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
  complete?: () => void;
};
export function RegisterPage({ open, setOpen, complete }: props) {
  const [account, setAccount] = useState("");
  const [errorAccount, setErrorAccount] = useState("");

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const [otp, setOtp] = useState("");
  const [errorOtp, setErrorOtp] = useState("");

  const [stepTwo, setStepTwo] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [time, setTime] = useState(90); // bắt đầu từ 60s

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
      setButtonDisable(!(account && email && phone));
    } else {
      // Khi ở bước 2 -> cần đủ 4 trường
      setButtonDisable(!(account && email && phone && otp));
    }
  }, [account, email, phone, otp, stepTwo]);

  useEffect(() => {
    setAccount("");
    setEmail("");
    setPhone("");
    setOtp("");
    setErrorAccount("");
    setErrorEmail("");
    setErrorPhone("");
    setErrorOtp("");
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
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[540px] bg-white flex flex-col gap-6 p-6">
        <DialogHeader>
          <DialogTitle className="text-[#24723B] font-semibold text-[32px] text-center">
            ĐĂNG KÝ
          </DialogTitle>
        </DialogHeader>
        <InputComp
          value={account}
          onChange={setAccount}
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
          onChange={setEmail}
          title="Email"
          description="Là Email đăng ký tài khoản chứng khoán."
          error={errorEmail}
        />
        <InputComp
          value={phone}
          onChange={setPhone}
          error={errorPhone}
          title="Số điện thoại"
          description="Là số điện thoại đăng ký tài khoản chứng khoán"
        />
        {stepTwo && (
          <InputComp
            value={otp}
            onChange={setOtp}
            title="Otp"
            description={
              <p>
                Nhập số OTP vừa gửi về email đăng ký tài khoản chứng khoán phía
                trên. Bấm gửi lại nếu bạn không nhận được sau{" "}
                {time !== 0 ? (
                  time + "s"
                ) : (
                  <span className=" underline text-[#24723B] cursor-pointer">
                    Gửi lại mã
                  </span>
                )}
              </p>
            }
            error={errorOtp}
            show
          />
        )}
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
          Kiểm tra
        </button>
      </DialogContent>
    </Dialog>
  );
}
