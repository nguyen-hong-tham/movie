import { X } from "lucide-react";
import { BookingPage } from "./BookingPage";
import { useRef } from "react";

interface BookingModalProps {
  maLichChieu: number;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({
  maLichChieu,
  isOpen,
  onClose,
}: BookingModalProps) => {
  const selectedSeatsRef = useRef<number>(0);

  if (!isOpen) return null;

  // Handle close button with confirmation
  const handleCloseHeader = () => {
    if (selectedSeatsRef.current > 0) {
      const isConfirm = window.confirm("Bạn đã chọn ghế, bạn có chắc chắn muốn thoát?");
      if (isConfirm) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold"> Chọn Ghế</h2>
          <button
            onClick={handleCloseHeader}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body : phải truyền props ko sẽ ko hiện map danh sách ghế */}
        <div className="p-4">
          <BookingPage 
            maLichChieu={maLichChieu} 
            onSubmitClose={() => {
              // Khi submit thành công, đóng modal
              onClose();
            }}
            onClose={onClose}
            onSelectSeatsCount={(count) => {
              selectedSeatsRef.current = count;
            }}
          />  {/* Pass props */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;