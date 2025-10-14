import {} from "react";
import { Upload, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
type FilesUploadProps = {
  title?: string;
  value?: File | null; // 👈 chỉ 1 file
  onChange?: (value: File | null) => void;
  description?: React.ReactNode;
};

function FilesUpload({
  title,
  value = null,
  onChange,
  description,
}: FilesUploadProps) {
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // 👈 chỉ lấy 1 file duy nhất
    if (file) {
      onChange?.(file);
    }
  };

  // ❌ Xóa ảnh
  const handleRemoveImage = () => {
    onChange?.(null);
  };

  // 🧮 Format dung lượng file
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {title && <div className="font-medium mb-[3px] text-[20px]">{title}</div>}

      {/* Ô chọn ảnh */}
      <input
        id="addImg"
        type="file"
        className="hidden"
        accept="image/png,image/gif,image/jpeg,image/webp"
        // multiple
        onChange={handleAddImage}
      />
      <label
        htmlFor="addImg"
        className="w-full h-[150px] bg-[#F9F9F9] rounded-[12px] flex justify-center items-center m-[5px] hover:cursor-pointer border-dashed border-[1px] text-[#9095A0] hover:bg-[#F5FFF8] hover:text-[#24723B]"
      >
        <div className="text-center">
          <div className="flex justify-center items-center mb-3">
            <Upload className="w-6 h-6" />
          </div>
          <div className="text-[18px] font-medium">Bấm vào đây để tải ảnh</div>
        </div>
      </label>

      {/* Mô tả */}
      {description && (
        <div className="text-[#89918a] mt-[5px] ml-[5px] mr-[3px] text-[14px]">
          {description}
        </div>
      )}
      {/* Hiển thị danh sách ảnh */}
      {value && (
        <div className="flex flex-col gap-2">
          <Separator className="bg-[#889189] w-full" />
          <div className="text-lg font-normal text-[#464646]">
            File đã tải lên{" "}
          </div>

          <div className="flex items-center justify-between rounded-md px-2 py-2 bg-white hover:bg-gray-50 transition">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <img
                src={URL.createObjectURL(value)}
                alt={value.name}
                className="h-10 w-10 object-cover rounded-md flex-shrink-0 border"
              />
              <div className="min-w-0 flex-1">
                <div className="text-lg font-normal text-[#889189] truncate">
                  {value.name}
                </div>
                <div className="text-sm text-[#889189]">
                  {formatFileSize(value.size)}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleRemoveImage()}
              className="text-[#464646] hover:text-red-500 flex-shrink-0 ml-2"
            >
              <X className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilesUpload;
