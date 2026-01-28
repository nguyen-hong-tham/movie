export const SeatLegend = () => {
  return (
    <div className="flex gap-6 justify-center py-4 px-6 bg-gray-50 rounded-lg flex-wrap">
      {/* Ghế Thường */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-green-400 rounded"></div>
        <span className="text-sm font-medium">Ghế Thường</span>
      </div>

      {/* Ghế VIP */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-yellow-400 rounded"></div>
        <span className="text-sm font-medium">Ghế VIP</span>
      </div>

      {/* Đã đặt */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-500 rounded"></div>
        <span className="text-sm font-medium">Đã đặt</span>
      </div>

      {/* Đã chọn */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-red-600 rounded"></div>
        <span className="text-sm font-medium">Đang chọn</span>
      </div>
    </div>
  );
};
