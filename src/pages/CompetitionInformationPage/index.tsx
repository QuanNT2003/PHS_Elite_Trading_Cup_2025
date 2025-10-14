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
import { SearchableSelectComp } from "@/components/shared/searchableSelectComp";
import FilesUpload from "@/components/shared/filesUpload";
import RegisterSuccessComp from "@/components/shared/registerSuccessComp";
import { X } from "lucide-react";
import * as PlayerService from "@/apiServices/Player";
import { LoadingComp } from "@/components/shared/loadingComp";
type props = {
  open?: boolean;
  setOpen?: (value: boolean) => void;
  obj?: {
    accountNumber: string;
    email: string;
    phone: string;
  };
};

const options = [
  { value: "UEL", label: "Đại học Kinh tế - Luật (UEL)" },
  { value: "UEH", label: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)" },
  { value: "UFM", label: "Đại học Tài chính - Marketing (UFM)" },
  { value: "Other", label: "Khác" },
];
function CompetitionInformationPage({ open, setOpen, obj }: props) {
  // console.log(obj);
  const [loading, setLoading] = useState(false);
  //Nickname
  const [nickname, setNickname] = useState("");
  const [errorNickname, setErrorNickname] = useState("");
  const onChangeNickName = (value: string) => {
    setNickname(value);
    setErrorNickname("");
  };
  //School
  const [school, setSchool] = useState("");
  const [otherShool, setOtherSchool] = useState("");

  //Student ID
  const [studentID, setStudentID] = useState("");
  const [errorStudentID, setErrorStudentID] = useState("");
  const onChangeStudentID = (value: string) => {
    setStudentID(value);
    setErrorStudentID("");
  };
  //Image
  const [images, setImages] = useState<File>();

  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    setNickname("");
    setSchool("");
    setOtherSchool("");
    setStudentID("");
    setErrorNickname("");
    setErrorStudentID("");
    setImages(undefined);
    setButtonDisable(true);
  }, [open]);

  useEffect(() => {
    if (school === "Other") {
      // Khi chưa tới bước 2 -> cần 3 trường
      setButtonDisable(!(nickname && school && otherShool && studentID));
    } else {
      // Khi ở bước 2 -> cần đủ 4 trường
      setButtonDisable(!(nickname && school && studentID));
    }
  }, [nickname, school, otherShool, studentID]);

  const [success, setSuccess] = useState(false);
  const onClick = async () => {
    setLoading(true);
    const playerObj = {
      email: obj?.email,
      accountNumber: obj?.accountNumber,
      phone: obj?.phone,
      nickName: nickname,
      university: school === "Other" ? otherShool : school,
      studentCode: studentID,
      avatar: images,
    };

    const result = await PlayerService.registerPlayer(playerObj).catch(
      (error) => {
        console.log(error);
        const messages = error.response?.data?.message;

        if (Array.isArray(messages)) {
          messages.forEach((msg: string) => {
            if (msg.toLowerCase().includes("nickname")) {
              setErrorNickname(msg);
            }
            // if (msg.toLowerCase().includes("số điện thoại")) {
            //   setErrorPhone(msg);
            // }
          });
        } else if (typeof messages === "string") {
          // trong trường hợp message không phải mảng
          if (messages.toLowerCase().includes("nickname")) {
            setErrorNickname(messages);
          }
          // if (messages.toLowerCase().includes("số điện thoại")) {
          //   setErrorPhone(messages);
          // }
        }
        setLoading(false);
      }
    );
    if (result) {
      setLoading(false);
      setSuccess(true);
      // console.log(result);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-[540px] bg-white flex flex-col gap-6 p-6 max-h-[95vh] overflow-y-auto">
        <AlertDialogHeader className="relative">
          <AlertDialogTitle className="text-[#24723B] font-semibold text-[32px] text-center">
            THÔNG TIN THI ĐẤU
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
            value={nickname}
            onChange={onChangeNickName}
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
            onChange={onChangeStudentID}
            title="Mã số sinh viên"
            error={errorStudentID}
            description="Mã số sinh viên sẽ được dùng để xác nhận thí sinh"
          />

          <FilesUpload
            title="Ảnh chụp thẻ sinh viên"
            value={images}
            onChange={(file) => setImages(file || undefined)}
            description="Thí sinh chụp ảnh và upload thẻ sinh viên 2 mặt còn hiệu lực trước khi thời gian thi đấu bắt đầu"
          />
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
            Đăng ký
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
      <LoadingComp open={loading} title="Please wait!" />
      <RegisterSuccessComp open={success} setOpen={setSuccess} />
    </AlertDialog>
  );
}

export default CompetitionInformationPage;
