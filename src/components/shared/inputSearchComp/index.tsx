import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
type InputSearchProps = {
  title?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: string;
  description?: string;
};
function InputSearchComp({
  title,
  value,
  placeholder,
  onChange,
  error,
  description,
}: InputSearchProps) {
  return (
    <div className=" gap-2 flex flex-col">
      <div className="font-medium mb-[3px] text-[20px]">{title}</div>
      <div className="relative w-full max-w-sm">
        {/* Icon Search */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2  w-5 h-5 cursor-pointer" />

        {/* Input */}
        <Input
          className={
            error
              ? "border-[#D83434] py-3 px-10 rounded-sm gap-[4px] text-[18px]"
              : "border-[#889189] py-3 px-10 rounded-sm gap-[4px] text-[18px]"
          }
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange?.(e.target.value);
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
        <div className="text-[#889189] font-normal text-[16px]">
          {description}
        </div>
      )}
    </div>
  );
}

export default InputSearchComp;
