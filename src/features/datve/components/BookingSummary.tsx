import { useState } from 'react';
import type { Ghe, ThongTinPhim } from '../services/booking.type';
interface BookingSummaryProps {
  movie?: ThongTinPhim;
  selectedSeats: Ghe[];
  onSubmitBooking: () => void;
  onClose: () => void;  // Thêm hàm để đóng modal
}

export const BookingSummary = ({ 
  selectedSeats,
  onSubmitBooking,
}: BookingSummaryProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Tính tổng tiền từ ghế đã chọn
  const tongTien = selectedSeats.reduce((total, seat) => total + seat.giaVe, 0);


  const handleBooking = async () => {
    if (selectedSeats.length === 0) {
      alert('Vui lòng chọn ít nhất 1 ghế!');
      return;
    }

    setIsSubmitting(true);
    try {
      // Chỉ hiện thông báo thôi
      const tongTienText = tongTien.toLocaleString('vi-VN');
      alert(` Đặt vé thành công!\n\nSố ghế: ${selectedSeats.length}\nTổng tiền: ${tongTienText}đ`);
      // Gọi hàm submit từ props
      onSubmitBooking();
    } catch (error) {
      alert(' Lỗi!');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg sticky top-20">
      <h3 className="text-lg font-bold mb-4">📋 Tóm tắt đơn hàng</h3>

      {/* Ghế đã chọn */}
      <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
        <p className="text-sm text-gray-600">
          Số ghế: <span className="font-bold text-lg text-red-600">{selectedSeats.length}</span>
        </p>
        {selectedSeats.length > 0 && (
          <div className="text-sm">
            <p className="font-semibold mb-2">Ghế:</p>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map(ghe => (
                <span
                  key={ghe.maGhe}
                  className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium"
                >
                  {ghe.tenGhe} ({ghe.loaiGhe === 'Vip' ? 'VIP' : 'Thường'})
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tổng tiền */}
      <div className="border-t pt-4 mb-4">
        <p className="flex justify-between text-sm mb-2">
          <span>Tổng tiền:</span>
          <span className="font-bold text-red-600 text-lg">
            {tongTien.toLocaleString('vi-VN')}đ
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button
          onClick={handleBooking}
          disabled={selectedSeats.length === 0 || isSubmitting}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 disabled:bg-gray-400 transition"
        >
          {isSubmitting ? 'Đang xử lý...' : 'Đặt Vé'}
        </button>
        {/* <button
          onClick={onClose}
          className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg font-bold hover:bg-gray-400 transition"
        >
          ✕ Đóng
        </button> */}
      </div>
    </div>
  );
};
