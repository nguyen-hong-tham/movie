import type { Ghe } from "../services/booking.type";

interface SeatProps extends Ghe {
  isSelected: boolean; // Ghế này có đang được chọn hay chưa
  onClick: () => void; // Callback khi click, truyền cả object ghế
}

// css theo trang thái ghế
const getButton = (ghe: Ghe, isSelected: boolean) => {
  if (ghe.daDat == true)
    // da chọn
    return "bg-gray-500 text-white";

  if (isSelected) return "bg-red-600 text-white";

  if (ghe.daDat == false) {
    if (ghe.loaiGhe == "Vip")
      return "bg-yellow-400 hover:bg-yellow-500 text-black";
    else return "bg-green-400 hover:bg-green-500 text-black";
  }
};

// Component hiển thị một ghế ngồi trong rạp.
// Hiển thị trạng thái ghế (đã đặt, đang chọn, trống) và xử lý sự kiện khi người dùng chọn ghế.
// Sử dụng các props để xác định trạng thái và hành vi của ghế.
export const Seat = ({
  maGhe,
  tenGhe,
  maRap,
  loaiGhe,
  stt,
  giaVe,
  daDat,
  onClick,
  isSelected,
}: SeatProps) => {
  return (
    <button
      disabled={daDat}
      onClick={() => {
        if (!daDat) {
          console.log("CLICK SEAT:", maGhe);
          onClick();
        }
      }}
      title={`${maGhe} - ${daDat ? "Đã đặt" : giaVe.toLocaleString("vi-VN")}đ`}
      className={`w-10 h-10 rounded text-sm font-semibold
            ${getButton({ maGhe, tenGhe, maRap, loaiGhe, stt, giaVe, daDat } as Ghe, isSelected)}
        `}
    >
      {tenGhe}
    </button>
  );
  // Thêm vào handleClick để xem data:
  console.log("🔍 Ghế props:", { maGhe, tenGhe, loaiGhe, giaVe, daDat });
  console.log("🔍 isSelected:", isSelected);
  console.log("🔍 onClick callback:", onClick);
};
