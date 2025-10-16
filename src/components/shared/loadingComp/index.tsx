import { LoaderIcon } from "lucide-react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import {
  AlertDialogDescription,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
type LoadingProps = {
  title?: string;
  open: boolean;
};
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export function LoadingComp({ open, title }: LoadingProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-white w-fit">
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription></AlertDialogDescription>
        <div className="flex flex-col items-center justify-center p-[20px]">
          <Spinner className="size-8" />
          <div className="mt-[20px] text-[16px] font-bold">{title}...</div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
