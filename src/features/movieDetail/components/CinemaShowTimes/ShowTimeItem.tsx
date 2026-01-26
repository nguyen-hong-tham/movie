import type { LichChieuPhim } from "../../services/showtimes.type";

interface ShowTimeItemProps {
  lich: LichChieuPhim;
  onSelectShowtime?: (maLichChieu: number) => void;
}

export const ShowTimeItem = ({ lich, onSelectShowtime }: ShowTimeItemProps) => {
  const handleClick = () => {
    console.log("🎟️ Click ShowTime:", lich.maLichChieu);
    onSelectShowtime?.(Number(lich.maLichChieu));
  };

  return (
    <button
      onClick={handleClick}
      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1 rounded font-semibold text-sm transition duration-200"
    >
      {new Date(lich.ngayChieuGioChieu).toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </button>
  );
};
