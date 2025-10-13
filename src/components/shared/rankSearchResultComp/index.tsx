import { ChevronDown } from "lucide-react";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type SearchResultProps = {
  rank: number;
  nickname: string;
  account: string;
  university: string;
  profit: number;
  change: number;
};

export default function RankSearchResultComp({
  rank,
  nickname,
  account,
  university,
  profit,
  change,
}: SearchResultProps) {
  const [scroll, setScroll] = useState(false);

  return (
    <div className="min-w-[1200px] rounded-md border border-[#e2e2e2]">
      {/* Header */}
      <div
        className="flex items-center justify-between bg-[#C89B2C] text-white font-semibold px-4 py-2 cursor-pointer"
        onClick={() => setScroll(!scroll)}
      >
        <span>Kết quả tìm kiếm</span>
        <ChevronDown
          size={20}
          className={cn(
            "transition-transform duration-300",
            scroll && "rotate-180"
          )}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "bg-[#FFF0CD] min-w-[1200px] flex items-center overflow-hidden transition-all duration-500 h-[89px]",
          scroll ? "max-h-0 opacity-0" : "max-h-[100px] opacity-100"
        )}
      >
        <div className="text-center py-6 px-4 w-[10%]">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-700 text-white font-semibold text-xs mx-auto">
            {rank}
          </div>
        </div>

        <div className="font-medium text-gray-900 py-6 px-4 text-center w-[10%]">
          {nickname}
        </div>

        <div className="text-gray-700 py-6 px-4 w-[10%]">{account}</div>

        <div className="text-gray-700 py-6 px-4 text-center align-middle w-[40%]">
          <div className="flex justify-center">
            <div
              className="text-center break-words whitespace-normal overflow-hidden max-w-[90%]"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {university}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "text-center font-medium py-6 px-4 w-[15%]",
            profit < 0
              ? "text-[#D83434]"
              : profit > 0
              ? "text-[#24723B]"
              : "text-[#464646]"
          )}
        >
          {profit !== 0 ? profit + "%" : "-"}
        </div>

        <div className="text-center py-6 px-4 w-[15%]">
          {change > 0 ? (
            <span className="flex items-center justify-center gap-1 text-green-700 font-medium">
              <ArrowUp size={14} />+{change}
            </span>
          ) : change < 0 ? (
            <span className="flex items-center justify-center gap-1 text-red-600 font-medium">
              <ArrowDown size={14} />
              {change}
            </span>
          ) : (
            <span className="flex items-center justify-center text-gray-400 font-medium">
              <Minus size={14} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
