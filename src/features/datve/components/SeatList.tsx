import type { Ghe } from "../services/booking.type";
import { Seat } from "./Seat";
import { SeatLegend } from "./SeatLegend";

// - some(): kiểm tra phần tử có tồn tại trong mảng không
// - filter(): lọc ra mảng mới theo điều kiện
// - reduce(): gom mảng thành object (group ghế theo hàng)
// - push(): thêm phần tử vào mảng
// - Object.entries(): chuyển object thành mảng để map
// - map(): lặp để render danh sách


interface SeatListProps {
  danhSachGhe: Ghe[]; // danh sách ghế từ api
  selectedSeats: Ghe[]; // ghế đã chọn object là ghế
  onSelectSeats: (soLuongGhe: Ghe[]) => void; //Nhận array Ghe, trả về array
}

// Component hiển thị danh sách ghế ngồi trong rạp.
// Sử dụng component Seat để hiển thị từng ghế và quản lý trạng thái chọn ghế.
export const SeatList = ({
  danhSachGhe,
  selectedSeats,
  onSelectSeats,
}: SeatListProps) => {


  // xử lý :thêm ghế + bỏ ghế
  const handleSelectSeat = (ghe: Ghe) => {
    const isAlreadySelected = selectedSeats.some((s) => s.maGhe === ghe.maGhe);

    console.log("ghe da chon:" + isAlreadySelected);

    if (isAlreadySelected === true) {
      // bỏ chọn
      const updated = selectedSeats.filter((s) => s.maGhe !== ghe.maGhe);
      onSelectSeats(updated);
      console.log(`Bỏ chọn: ${ghe.maGhe}`);
    } else {
      // Thêm chọn
      const updated = [...selectedSeats, ghe];
      onSelectSeats(updated);
      console.log(`Chọn: ${ghe.maGhe}`);
    }
  };

  // console kiểm tra
  console.log(" SeatList received:", {
    danhSachGhe,
    selectedSeats,
    soLuongGhe: danhSachGhe.length,
  });

  //  nhóm hàng ghế
  const groupByRow = (seats: Ghe[]) => {
    const grouped = seats.reduce(
      (acc, seat) => {
        const row = seat.stt; // stt = A, B, C...

        if (!acc[row]) {
          acc[row] = [];
        }
        acc[row].push(seat);
        return acc;
      },
      {} as Record<string, Ghe[]>
    );

    // Sort ghế trong mỗi hàng theo tenGhe (01, 02, 03...)
    Object.keys(grouped).forEach((row) => {
      grouped[row].sort((a, b) => parseInt(a.tenGhe) - parseInt(b.tenGhe));
    });

    return grouped;
  };

  const rowSeats = groupByRow(danhSachGhe);

  // Get hàng sorted (A, B, C...)
  const rows = Object.keys(rowSeats).sort();

  console.log("rowSeats after grouping:", rowSeats);
  console.log("rows sorted:", rows);

  if (danhSachGhe.length === 0) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Màn hình */}
      <div className="text-center py-4 border-b-4 border-yellow-500">
        <p className="text-gray-600 font-semibold text-lg">🎬 MÀNG HÌNH</p>
      </div>

      {/* Legend */}
      <SeatLegend />

      {/* Ghế - wrap 10 ghế/hàng */}
      <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
        {danhSachGhe.map((seat) => (
          <Seat
            key={seat.maGhe}
            {...seat}
            isSelected={selectedSeats.some((s) => s.maGhe === seat.maGhe)}
            onClick={() => handleSelectSeat(seat)}
          />
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t text-center">
        <p className="text-sm text-gray-600">
          ✅ Đã chọn: <span className="font-bold text-green-600">{selectedSeats.length}</span> ghế
        </p>
        {selectedSeats.length > 0 && (
          <p className="text-sm text-gray-600 mt-1">
            Ghế: {selectedSeats.map((s) => s.tenGhe).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};
