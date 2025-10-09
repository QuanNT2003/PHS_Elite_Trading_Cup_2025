import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import InputComp from "../../components/shared/inputComp";
import { SearchableSelectComp } from "@/components/shared/searchableSelectComp";

type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
};

const options = [
  { value: "UEL", label: "Đại học Kinh tế – Luật (UEL)" },
  { value: "UEH", label: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)" },
  { value: "Other", label: "Khác" },
];
function CompetitionInformationPage({ open, setOpen }: props) {
  const [nickname, setNickname] = useState("");
  const [errorNickname, setErrorNickname] = useState("");

  const [school, setSchool] = useState("");

  const [studentID, setStudentID] = useState("");
  const [errorStudentID, setErrorStudentID] = useState("");

  const [buttonDisable, setButtonDisable] = useState(true);
  const onClick = () => {};

  useEffect(() => {
    setNickname("");
    setSchool("");
    setErrorNickname("");
    setErrorStudentID("");
    setButtonDisable(true);
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger> */}
      <DialogContent className="sm:max-w-[600px] bg-white flex flex-col gap-3">
        <DialogHeader>
          <DialogTitle className="text-[#24723B] font-semibold text-[32px] text-center">
            THÔNG TIN THI ĐẤU
          </DialogTitle>
        </DialogHeader>
        <InputComp
          value={nickname}
          onChange={setNickname}
          title="Nickname"
          error={errorNickname}
          description="Không trái thuần phong mỹ tục, không sử dụng các ký tự đặc biệt !@#$%^&*(), giới hạn tối đa 12 kí tự, không có khoảng trắng"
        />

        <SearchableSelectComp
          title="Trường học"
          placeholder="Chọn trường học hoặc tìm kiếm nhanh"
          options={options}
          value={school}
          onChange={setSchool}
        />
        <InputComp
          value={studentID}
          onChange={setStudentID}
          title="Mã số sinh viên"
          error={errorStudentID}
          description="Mã số sinh viên sẽ được dùng để xác nhận thí sinh"
        />

        <button
          disabled={buttonDisable}
          onClick={() => onClick()}
          className={
            buttonDisable
              ? "ms-2 w-full bg-[#889189] rounded-sm py-4 px-12 text-center text-white gap-2.5 text-[20px] font-medium cursor-pointer "
              : "ms-2 w-full bg-[#24723B] rounded-sm py-4 px-12 text-center text-white gap-2.5 text-[20px] font-medium cursor-pointer hover:bg-[#24723b79]"
          }
        >
          Kiểm tra
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default CompetitionInformationPage;
