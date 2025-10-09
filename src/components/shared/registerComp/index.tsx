import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import InputComp from "../inputComp";
import { Button } from "@/components/ui/button";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
};
export function RegisterComp({ open, setOpen }: props) {
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#24723B] font-semibold text-[32px] text-center">
            Đăng ký
          </DialogTitle>
        </DialogHeader>
        <InputComp
          value={account}
          onChange={setAccount}
          title="Số tài khoản"
          description="Số tài khoản bắt đầu bằng 022C (Ví dụ: 022C111234). Nếu chưa có tài khoản PHS, Bấm vào đây."
        />
        <InputComp
          value={email}
          onChange={setEmail}
          title="Email"
          description="Là Email đăng ký tài khoản chứng khoán."
        />
        <InputComp
          value={phone}
          onChange={setPhone}
          title="Số điện thoại"
          description="Là số điện thoại đăng ký tài khoản chứng khoán"
        />
        <Button className="bg-[#24723B] rounded-sm py-4 px-12 text-center text-white gap-2.5 text-[20px] font-medium">
          Kiểm tra
        </Button>
      </DialogContent>
    </Dialog>
  );
}
