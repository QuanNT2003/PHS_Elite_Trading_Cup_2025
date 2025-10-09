import { ChevronDown } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
type SearchResultProps = {
  rank: number;
  nickname: string;
  account: string;
  university: string;
  profit: string;
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
  return (
    <div className=" min-w-[1024px] overflow-x-auto rounded-md border border-[#e2e2e2]">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#C89B2C] text-white font-semibold px-4 py-2">
        <span>Kết quả tìm kiếm</span>
        <ChevronDown size={20} className="cursor-pointer" />
      </div>

      {/* Content */}
      <Table>
        <TableBody>
          <TableRow className="bg-[#FFF0CD]">
            <TableCell className="text-center py-6 px-4">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-700 text-white font-semibold text-xs mx-auto">
                {rank}
              </div>
            </TableCell>

            <TableCell className="font-medium text-gray-900 py-6 px-4 text-center">
              {nickname}
            </TableCell>
            <TableCell className="text-gray-700 py-6 px-4">{account}</TableCell>
            <TableCell className="text-gray-700 py-6 px-4 text-center">
              {university}
            </TableCell>

            <TableCell
              className={cn(
                "text-center font-medium py-6 px-4",
                profit.includes("-") ? "text-red-600" : "text-green-700"
              )}
            >
              {profit}
            </TableCell>

            <TableCell className="text-center py-6 px-4">
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
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
