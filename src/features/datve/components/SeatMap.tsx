import { useMemo } from "react"
import type { Ghe } from "../services/datve.type"
import { SeatItem } from "./SeatItem"

interface SeatMapProps {
  danhSachGhe: Ghe[]
  selectedSeats: Ghe[]
  onSelectSeat: (ghe: Ghe) => void
}

export const SeatMap = ({ danhSachGhe, selectedSeats, onSelectSeat }: SeatMapProps) => {
  // Sắp xếp ghế theo hàng (row)
  const seatsByRow = useMemo(() => {
    const rows: Record<string, Ghe[]> = {}
    danhSachGhe.forEach(ghe => {
      const row = ghe.tenGhe.charAt(0) // A, B, C, ...
      if (!rows[row]) rows[row] = []
      rows[row].push(ghe)
    })
    return rows
  }, [danhSachGhe])

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">🎬 MÀN HÌNH CHIẾU</h3>
        <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500 mt-2 rounded-full" />
      </div>

      {/* Bản đồ ghế */}
      <div className="space-y-3 bg-white p-6 rounded-lg">
        {Object.entries(seatsByRow).map(([row, seats]) => (
          <div key={row} className="flex gap-2 justify-center items-center">
            <span className="font-bold text-gray-600 w-6">{row}</span>
            <div className="flex gap-2 flex-wrap justify-center">
              {seats.map(ghe => (
                <SeatItem
                  key={ghe.maGhe}
                  ghe={ghe}
                  isSelected={selectedSeats.some(s => s.maGhe === ghe.maGhe)}
                  onSelect={onSelectSeat}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-6 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded" />
          <span>Còn trống</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-600 rounded" />
          <span>Đã chọn</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-400 rounded" />
          <span>Đã đặt</span>
        </div>
      </div>
    </div>
  )
}