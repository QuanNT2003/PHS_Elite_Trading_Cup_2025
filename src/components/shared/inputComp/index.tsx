import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
const addCommas = (num: string) => {
  if (Number(num) === 0) return "0";

  if (num.indexOf("0") === 0)
    return num
      .toString()
      .slice(1)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const removeNonNumeric = (num: string) => num.toString().replace(/[^0-9]/g, "");

type InputTextProps = {
  title?: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  money?: boolean;
  number?: boolean;
  //   type?: string;
  error?: string;
  description?: React.ReactNode;
  show?: boolean;
  id?: string;
};
function InputComp({
  title,
  required,
  value,
  placeholder,
  onChange,
  money,
  number,
  //   type,
  error,
  description,
  show,
  id,
}: InputTextProps) {
  return (
    <div className="w-full flex flex-col gap-3 ">
      <div className="font-medium mb-[3px] text-[20px]">
        {title}
        {required && <span className="text-red-500"> *</span>}
      </div>
      <div className="relative w-full">
        <Input
          id={id}
          className={` w-full rounded-[4px] !font-normal !p-[16px] !text-[18px] !pe-10 gap-[4px] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border ${
            error
              ? "border-[#D83434] text-[#D83434] hover:border-[#D83434] hover:border-[1px]"
              : "border-[#889189] text-[#464646] hover:border-[#8a8a8a] hover:border-[1px]"
          }`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (money) {
              onChange?.(addCommas(removeNonNumeric(e.target.value)));
            } else if (number) {
              onChange?.(removeNonNumeric(e.target.value));
            } else {
              onChange?.(e.target.value);
            }
          }}
        />
        {value && (
          <button
            onClick={() => onChange?.("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className=" w-6 h-6" />
          </button>
        )}
      </div>
      {show ? (
        <div>
          <div className="text-[#89918a] mt-[5px] ml-[5px] mr-[3px] text-[14px]">
            {description}
          </div>
          <div className="text-red-500 mt-[5px] ml-[5px] mr-[3px] text-[14px]">
            {error}
          </div>
        </div>
      ) : error ? (
        <div className="text-red-500 mt-[5px] ml-[5px] mr-[3px] text-[14px]">
          {error}
        </div>
      ) : (
        <div className="text-[#89918a] mt-[5px] ml-[5px] mr-[3px] text-[14px]">
          {description}
        </div>
      )}
    </div>
  );
}

export default InputComp;
