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
import { LoadingComp } from "@/components/shared/loadingComp";
import * as ParticipantService from "@/apiServices/Participant";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
  complete?: (account: string, email: string, phone: string) => void;
};
export function RegisterPage({ open, setOpen, complete }: props) {
  const [loading, setLoading] = useState(false);

  const [account, setAccount] = useState("");
  const [errorAccount, setErrorAccount] = useState("");
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
  const [resultOtp, setResultOtp] = useState("");
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
    setAccount("");
    setEmail("");
    setPhone("");
    setOtp("");
    setErrorAccount("");
    setErrorEmail("");
    setErrorPhone("");
    setErrorOtp("");
  }, [open]);

  const sendOtp = async () => {
    setLoading(true);
    const obj = {
      email: email,
      accountNumber: account,
      phone: phone,
    };

    const result = await ParticipantService.registerOtp(obj).catch((error) => {
      // console.log(error.response.data.message);
      const messages = error.response?.data?.message;

      if (Array.isArray(messages)) {
        messages.forEach((msg: string) => {
          if (
            msg.toLowerCase().includes("accountnumber") ||
            msg.toLowerCase().includes("số tài khoản")
          ) {
            setErrorAccount(msg + ", vui lòng thử lại");
          }
          if (msg.toLowerCase().includes("email")) {
            setErrorEmail(msg + ", vui lòng thử lại");
          }
          if (msg.toLowerCase().includes("số điện thoại")) {
            setErrorPhone(msg + ", vui lòng thử lại");
          }
        });
      } else if (typeof messages === "string") {
        // trong trường hợp message không phải mảng
        if (
          messages.toLowerCase().includes("accountnumber") ||
          messages.toLowerCase().includes("số tài khoản")
        ) {
          setErrorAccount(messages + ", vui lòng thử lại");
        }
        if (messages.toLowerCase().includes("email")) {
          setErrorEmail(messages + ", vui lòng thử lại");
        }
        if (messages.toLowerCase().includes("số điện thoại")) {
          setErrorPhone(messages + ", vui lòng thử lại");
        }
      }
      setLoading(false);
    });
    if (result) {
      setLoading(false);
      setStepTwo(true);
      setTime(90);
      setResultOtp(result.toString());
      // console.log(result);
    }
  };
  const onClick = async () => {
    if (stepTwo === false) {
      await sendOtp();
    } else {
      if (time === 0) {
        setErrorOtp("Quá thời gian nhập otp, vui lòng lấy lại otp");
      } else {
        if (otp === resultOtp) {
          complete?.(account, email, phone);
        } else {
          setErrorOtp("Nhập sai otp, vui lòng lấy lại otp");
        }
      }
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
                    <span
                      className=" underline text-[#24723B] cursor-pointer"
                      onClick={() => sendOtp()}
                    >
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
      <LoadingComp open={loading} />
    </AlertDialog>
  );
}
