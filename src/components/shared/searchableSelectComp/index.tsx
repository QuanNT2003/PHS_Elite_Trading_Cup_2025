import { useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
interface Option {
  label: string;
  value: string;
}

interface SearchableSelectProps {
  title?: string;
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchableSelectComp({
  title,
  options,
  placeholder = "Chọn trường học hoặc tìm kiếm nhanh",
  // value,
  onChange,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // đóng popover khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex flex-col gap-1 relative">
      {title && <div className="font-medium mb-[3px] text-[20px]">{title}</div>}

      {/* Ô input luôn hiển thị bên ngoài popover trigger */}
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2  w-6 h-6 text-gray-500" />
        <Input
          ref={inputRef}
          value={searchTerm}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setOpen(true);
          }}
          placeholder={placeholder}
          className="pl-10 text-lg pr-8 text-start hover:border-[#8a8a8a] hover:border-[1px] border-[#889189] focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
        />
        {searchTerm === "" ? (
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
        ) : (
          <X
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 cursor-pointer"
            onClick={() => {
              onChange?.("");
              setSearchTerm("");
            }}
          />
        )}
      </div>

      {/* Popover dùng trigger ẩn chỉ để định vị */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {/* Trigger ẩn để giữ logic popover, không nhận event click */}
          <span></span>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="w-[var(--radix-popover-trigger-width)] bg-white p-0 shadow-md border border-gray-200 rounded-md"
        >
          <Command>
            <CommandList>
              <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
              <CommandGroup>
                {filteredOptions.map((school) => (
                  <CommandItem
                    key={school.value}
                    value={school.value}
                    onSelect={() => {
                      onChange?.(school.value);
                      setSearchTerm(school.label);
                      setOpen(false);
                    }}
                  >
                    {school.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
