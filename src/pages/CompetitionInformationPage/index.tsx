import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import InputComp from "../../components/shared/inputComp";
import { SearchableSelectComp } from "@/components/shared/searchableSelectComp";
import FilesUpload from "@/components/shared/filesUpload";

type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
};

const options = [
  { value: "UEL", label: "Đại học Kinh tế - Luật (UEL)" },
  { value: "UEH", label: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)" },
  { value: "Other", label: "Khác" },
];
function CompetitionInformationPage({ open, setOpen }: props) {
  //Nickname
  const [nickname, setNickname] = useState("");
  const [errorNickname, setErrorNickname] = useState("");

  //School
  const [school, setSchool] = useState("");
  const [otherShool, setOtherSchool] = useState("");

  //Student ID
  const [studentID, setStudentID] = useState("");
  const [errorStudentID, setErrorStudentID] = useState("");

  //Image
  const [images, setImages] = useState<File[]>([]);

  const [buttonDisable, setButtonDisable] = useState(true);
  const onClick = () => {};

  useEffect(() => {
    setNickname("");
    setSchool("");
    setOtherSchool("");
    setErrorNickname("");
    setErrorStudentID("");
    setImages([]);
    setButtonDisable(true);
  }, [open]);

  useEffect(() => {
    if (school === "Other") {
      // Khi chưa tới bước 2 -> cần 3 trường
      setButtonDisable(
        !(nickname && school && otherShool && studentID && images.length > 0)
      );
    } else {
      // Khi ở bước 2 -> cần đủ 4 trường
      setButtonDisable(!(nickname && school && studentID && images.length > 0));
    }
  }, [nickname, school, otherShool, studentID, images]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[540px] bg-white flex flex-col gap-6 p-6 max-h-[95vh] overflow-y-auto">
        {/* <DialogClose asChild>
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-red-500 transition"
            aria-label="Close"
          >
            <X className="h-6 w-6" /> 
          </button>
        </DialogClose> */}
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
        <div>
          <SearchableSelectComp
            title="Trường học"
            placeholder="Chọn trường học hoặc tìm kiếm nhanh"
            options={options}
            value={school}
            onChange={setSchool}
          />
          {school === "Other" && (
            <InputComp value={otherShool} onChange={setOtherSchool} />
          )}
        </div>

        <InputComp
          value={studentID}
          onChange={setStudentID}
          title="Mã số sinh viên"
          error={errorStudentID}
          description="Mã số sinh viên sẽ được dùng để xác nhận thí sinh"
        />

        <FilesUpload
          title="Ảnh chụp thẻ sinh viên"
          value={images}
          onChange={setImages}
          description="Thí sinh chụp ảnh và upload thẻ sinh viên 2 mặt còn hiệu lực trước khi thời gian thi đấu bắt đầu"
        />
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

export default CompetitionInformationPage;
