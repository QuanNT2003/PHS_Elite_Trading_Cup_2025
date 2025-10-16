import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Component: RuleCardComp
// Mô tả: Grid 2 cột (desktop) giống thiết kế: ảnh trên, badge số, tiêu đề, mô tả.
// Công nghệ: React + TypeScript + Tailwind + shadcn/ui

type RuleItem = {
  id: string;
  number?: string; // ví dụ: "01"
  title: string;
  description?: React.ReactNode;
  // bạn có thể truyền React node cho image (SVG hoặc <img />)
  image?: React.ReactNode;
};

type Props = {
  items: RuleItem[];
};

export default function RuleCardComp({ items }: Props) {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center gap-4 ">
        {items.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden shadow-none border border-transparent bg-[#ECF6EA] sm:w-[40%] w-[70%] lg:w-[288px] min-w-[288px] p-0"
          >
            <CardContent className="p-0">
              <div className="flex flex-col">
                {/* Image area */}
                <div className="w-full flex items-start justify-center bg-white m-0 p-10">
                  {item.image}
                </div>

                {/* Text area */}

                <div className="w-full p-2 gap-2 mb-[10px] flex flex-col justify-between">
                  <div className="flex flex-col relative">
                    <Badge className="bg-[#24723B] text-white rounded-md px-3 py-1 text-sm absolute top-[-22px] left-0">
                      {item.number}
                    </Badge>
                    <h3 className="text-xl font-semibold text-[#24723B] mt-4">
                      {item.title}
                    </h3>
                  </div>

                  <div className="lg:text-[16px] text-[#464646] font-normal">
                    {item.description}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
