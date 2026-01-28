import { useQueryUserInfoByAccessToken } from "@/shared/hooks";
import { X } from "lucide-react";
import { Button } from "@/core/ui";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const { data: userInfo } = useQueryUserInfoByAccessToken();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Thông Tin Cá Nhân</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        {userInfo ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Họ Tên</label>
              <p className="font-semibold text-lg">{userInfo.hoTen}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Tài Khoản</label>
              <p className="font-semibold text-lg">{userInfo.taiKhoan}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="font-semibold text-lg">{userInfo.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Số Điện Thoại</label>
              <p className="font-semibold text-lg">{userInfo.soDT}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Đang tải thông tin...</p>
        )}

        {/* Footer */}
        <div className="mt-6">
          <Button
            onClick={onClose}
            className="w-full"
          >
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};
