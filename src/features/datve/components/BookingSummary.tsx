import type { Ghe, ThongTinPhim } from "../services/datve.type"

interface BookingSummaryProps {
  thongTinPhim: ThongTinPhim
  selectedSeats: Ghe[]
  onConfirm: () => void
  isLoading: boolean
}

export const BookingSummary = ({
  thongTinPhim,
  selectedSeats,
  onConfirm,
  isLoading,
}: BookingSummaryProps) => {
  const tongTien = selectedSeats.reduce((sum, ghe) => sum + ghe.giaVe, 0)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Tóm Tắt Đơn</h3>

      {/* Thông tin phim */}
      <div className="border-b pb-4 mb-4">
        <p className="font-semibold text-gray-900">{thongTinPhim.tenPhim}</p>
        <p className="text-sm text-gray-600">{thongTinPhim.tenRap}</p>
        <p className="text-sm text-gray-600">
          {thongTinPhim.ngayChieu} {thongTinPhim.gioChieu}
        </p>
      </div>

      {/* Danh sách ghế chọn */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Ghế:</h4>
        {selectedSeats.length === 0 ? (
          <p className="text-sm text-gray-500">Chưa chọn ghế</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selectedSeats.map(ghe => (
              <span
                key={ghe.maGhe}
                className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-bold"
              >
                {ghe.tenGhe}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Tính tiền */}
      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between mb-2 text-gray-700">
          <span>Số ghế:</span>
          <span className="font-bold">{selectedSeats.length}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Tổng tiền:</span>
          <span className="text-2xl font-bold text-red-600">{tongTien.toLocaleString('vi-VN')} ₫</span>
        </div>

        {/* Button */}
        <button
          onClick={onConfirm}
          disabled={selectedSeats.length === 0 || isLoading}
          className={`w-full py-3 rounded-lg font-bold text-white transition ${
            selectedSeats.length === 0 || isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {isLoading ? '⏳ Đang xử lý...' : `🎫 Đặt ${selectedSeats.length} vé`}
        </button>
      </div>
    </div>
  )
}