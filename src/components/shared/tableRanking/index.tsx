import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";
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
  profit: number;
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
    <div className="overflow-x-auto w-full">
      <Table className="text-sm border border-gray-200 rounded-md overflow-hidden table-fixed w-full min-w-[1200px]">
        <TableHeader>
          <TableRow className="bg-green-800 text-white font-semibold sm:text-xl">
            <TableHead className="text-center py-6 px-4 w-[10%]">
              Thứ hạng
            </TableHead>
            <TableHead className="text-center py-6 px-4 w-[10%]">
              Nickname
            </TableHead>
            <TableHead className="text-center py-6 px-4 w-[10%]">
              Số tài khoản
            </TableHead>
            <TableHead className="text-center py-6 px-4 w-[40%]">
              Trường
            </TableHead>
            <TableHead className="text-center py-6 px-4 w-[15%]">
              Tỉ suất lợi nhuận
            </TableHead>
            <TableHead className="text-center py-6 px-4 w-[15%]">
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
                "hover:bg-green-100 transition h-[89px]"
              )}
            >
              <TableCell className="text-center py-6 px-4 w-[10%]">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-700 text-white font-semibold text-xs mx-auto">
                  {item.rank}
                </div>
              </TableCell>

              <TableCell className="font-medium text-gray-900 py-6 px-4 w-[10%] text-center">
                {item.nickname}
              </TableCell>
              <TableCell className="text-gray-700 py-6 px-4 w-[10%] text-center">
                {maskAccount(item.account)}
              </TableCell>
              <TableCell className="text-gray-700 py-6 px-4 text-center align-middle">
                <div className="flex justify-center">
                  <div
                    className="text-center break-words whitespace-normal overflow-hidden max-w-[90%]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.university}
                  </div>
                </div>
              </TableCell>

              <TableCell
                className={cn(
                  "text-center font-medium py-6 px-4 w-[15%]",
                  item.profit < 0
                    ? "text-[#D83434]"
                    : item.profit > 0
                    ? "text-[#24723B]"
                    : "text-[#464646]"
                )}
              >
                {item.profit !== 0 ? item.profit + "%" : "-"}
              </TableCell>

              <TableCell className="text-center py-6 px-4 w-[15%]">
                {item.change > 0 ? (
                  <span className="flex items-center justify-center gap-1 text-[#24723B] font-medium">
                    <ArrowUp size={14} />+{item.change}
                  </span>
                ) : item.change < 0 ? (
                  <span className="flex items-center justify-center gap-1 text-[#D83434] font-medium">
                    <ArrowDown size={14} />
                    {item.change}
                  </span>
                ) : (
                  <span className="flex items-center justify-center text-[#464646] font-medium">
                    -
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
