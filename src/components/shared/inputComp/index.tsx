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
  description?: string;
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
}: InputTextProps) {
  return (
    <div className="mx-2 w-full">
      <div className="font-medium mb-[3px] text-[20px]">
        {title}
        {required && <span className="text-red-500"> *</span>}
      </div>
      <div className="relative w-full">
        <Input
          className={
            error
              ? "border-[#D83434] rounded-[4px] p-[16px] pe-10 gap-[4px] text-[18px] w-full"
              : "border-black rounded-[4px] p-[16px] pe-10 gap-[4px] text-[18px] w-full"
          }
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
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {error ? (
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
