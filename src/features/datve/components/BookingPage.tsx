import { useState } from "react";
import { usePhongVe } from "../hook/usePhongVe";
import type { Ghe } from "../services/booking.type";
import { SeatList } from "./SeatList";
import { BookingSummary } from "./BookingSummary";
// ============================================
// lay Mã lịch chiếu từ props
// ============================================
//goi api lay usePhongVe
//giu state selectedSeats
//xu ly submitBooking
// ============================================
interface BookingPageProps {
  maLichChieu: number;
  onSubmitClose?: () => void;  // Chỉ gọi khi submit thành công (optional)
  onClose?: () => void;  // Gọi khi đóng modal
  onSelectSeatsCount?: (count: number) => void;  // Callback để report số ghế được chọn
}

export const BookingPage = ({ maLichChieu, onSubmitClose, onClose, onSelectSeatsCount }: BookingPageProps) => {
  console.log("🎬 BookingPage - maLichChieu (from props):", maLichChieu);

  // gọi API lấy usePhongVe
  const {
    data: phongVeData,
    isLoading,
    isError,
  } = usePhongVe(maLichChieu);

  // Giữ state:selectedSeats
  const [selectedSeats, setSelectedSeats] = useState<Ghe[]>([]);
  const handleSelectSeats = (seats: Ghe[]) => {
    setSelectedSeats(seats);
    onSelectSeatsCount?.(seats.length);  // Report số ghế được chọn
  };

  // submit đặt vé
  const handleSubmitBooking = () => {
    if (selectedSeats.length === 0) {
      alert(" Vui lòng chọn ghế trước khi đặt vé!");
      return;
    }

    console.log("Submit booking:", {
      maLichChieu,
      danhSachVe: selectedSeats.map((s) => ({
        maGhe: s.maGhe,
        giaVe: s.giaVe,
      })),
    });

    // TODO: Call API submitBooking
    alert(" Đặt vé thành công!");
    onSubmitClose?.();  // Đóng modal sau khi submit
  };

  // ui
  if (isLoading) return <div>Đang tải dữ liệu phòng vé...</div>;
  if (isError) return <div>Lỗi khi tải dữ liệu phòng vé!</div>;

  // render
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Danh sách ghế */}
      <div className="lg:col-span-2">
        <SeatList
          danhSachGhe={phongVeData?.danhSachGhe || []}
          selectedSeats={selectedSeats}
          onSelectSeats={handleSelectSeats}
        />
      </div>

      {/* Tổng tiền & Đặt vé */}
      <div>
        <BookingSummary
          movie={phongVeData?.thongTinPhim}
          selectedSeats={selectedSeats}
          onSubmitBooking={handleSubmitBooking}
          onClose={onClose!}
        />
      </div>
    </div>
  );
};
