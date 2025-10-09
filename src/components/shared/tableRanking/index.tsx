import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RankingItem {
  rank: number;
  nickname: string;
  account: string;
  university: string;
  profit: string;
  change: number;
}

interface RankingTableProps {
  data: RankingItem[];
}

const maskAccount = (account: string) => {
  if (!account) return "";
  if (account.length <= 3) return "***"; // trường hợp an toàn
  return account.slice(0, -3) + "***";
};

export default function TableRanking({ data }: RankingTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table className="text-sm border border-gray-200 rounded-md overflow-hidden">
        <TableHeader>
          <TableRow className="bg-green-800 text-white font-semibold sm:text-xl">
            <TableHead className="text-center w-[80px] py-6 px-4">
              Thứ hạng
            </TableHead>
            <TableHead className="text-left py-6 px-4">Nickname</TableHead>
            <TableHead className="text-left py-6 px-4 ">Số tài khoản</TableHead>
            <TableHead className="text-center py-6 px-4">Trường</TableHead>
            <TableHead className="text-center py-6 px-4">
              Tỉ suất lợi nhuận
            </TableHead>
            <TableHead className="text-center py-6 px-4">
              Thứ hạng thay đổi
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.rank}
              className={cn(
                item.rank % 2 === 0 ? "bg-green-50" : "bg-white",
                "hover:bg-green-100 transition"
              )}
            >
              <TableCell className="text-center py-6 px-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-700 text-white font-semibold text-xs mx-auto">
                  {item.rank}
                </div>
              </TableCell>

              <TableCell className="font-medium text-gray-900 py-6 px-4 text-center">
                {item.nickname}
              </TableCell>
              <TableCell className="text-gray-700 py-6 px-4">
                {maskAccount(item.account)}
              </TableCell>
              <TableCell className="text-gray-700 py-6 px-4 text-center">
                {item.university}
              </TableCell>

              <TableCell
                className={cn(
                  "text-center font-medium py-6 px-4",
                  item.profit.includes("-") ? "text-red-600" : "text-green-700"
                )}
              >
                {item.profit}
              </TableCell>

              <TableCell className="text-center py-6 px-4">
                {item.change > 0 ? (
                  <span className="flex items-center justify-center gap-1 text-green-700 font-medium">
                    <ArrowUp size={14} />+{item.change}
                  </span>
                ) : item.change < 0 ? (
                  <span className="flex items-center justify-center gap-1 text-red-600 font-medium">
                    <ArrowDown size={14} />
                    {item.change}
                  </span>
                ) : (
                  <span className="flex items-center justify-center text-gray-400 font-medium">
                    <Minus size={14} />
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
