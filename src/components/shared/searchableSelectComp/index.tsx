// import * as React from "react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandInput,
//   CommandList,
//   CommandEmpty,
//   CommandItem,
//   CommandGroup,
// } from "@/components/ui/command";
// import { Button } from "@/components/ui/button";
// import { ChevronDown } from "lucide-react";
// import { Input } from "@/components/ui/input";

// type Option = {
//   label: string;
//   value: string;
// };

// interface SearchableSelectProps {
//   options: Option[];
//   value?: string;
//   onChange?: (value: string) => void;
//   placeholder?: string;
//   label?: string;
// }

// export function SearchableSelectComp({
//   options,
//   value,
//   onChange,
//   placeholder = "Chọn hoặc tìm kiếm...",
//   label,
// }: SearchableSelectProps) {
//   const [open, setOpen] = React.useState(false);
//   const selected = options.find((o) => o.value === value);

//   return (
//     <div className="ms-2 flex flex-col gap-1 w-full">
//       {label && (
//         <label className="font-medium mb-[3px] text-[20px]">{label}</label>
//       )}
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Input />
//           {/* <Button
//             variant="outline"
//             className="w-full justify-between bg-white text-gray-700 border rounded-md"
//           >
//             {selected ? selected.label : placeholder}
//             <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
//           </Button> */}
//         </PopoverTrigger>

//         <PopoverContent className="w-full p-0 bg-white">
//           <Command>
//             {/* <CommandInput placeholder={placeholder} /> */}
//             <CommandList>
//               <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
//               <CommandGroup>
//                 {options.map((opt) => (
//                   <CommandItem
//                     key={opt.value}
//                     onSelect={() => {
//                       onChange?.(opt.value);
//                       setOpen(false);
//                     }}
//                   >
//                     {opt.label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

import { useState, useMemo } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

interface SearchableSelectInputProps {
  title: string;
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function SearchableSelectComp({
  title,
  options,
  placeholder,
  value,
  onChange,
}: SearchableSelectInputProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Lọc danh sách
  const filtered = useMemo(() => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search]);

  return (
    <div className="ms-2 w-full flex flex-col gap-1">
      {title && (
        <label className="font-medium mb-[3px] text-[20px]">{title}</label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Input
            value={value}
            onChange={(e) => {
              onChange?.(e.target.value); // reset khi user nhập mới
              //   setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="cursor-text w-full text-start"
          />
        </PopoverTrigger>

        <PopoverContent
          className="w-full p-0 mt-1 max-h-[250px] overflow-y-auto"
          asChild
        >
          <Command className="bg-white w-full">
            <CommandList className="bg-white w-full">
              {filtered.length > 0 ? (
                <CommandGroup>
                  {filtered.map((item) => (
                    <CommandItem
                      key={item.label}
                      onSelect={() => {
                        onChange?.(item.value);
                        setSearch("");
                        setOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          value === item.label ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <CommandEmpty>Không tìm thấy kết quả</CommandEmpty>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
