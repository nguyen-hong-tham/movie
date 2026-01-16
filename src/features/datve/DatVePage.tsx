import { useState } from "react"
import { useParams } from "react-router"
import { useQueryPhongVe } from "../hooks/useQueryPhongVe"
import { datVeApi } from "../services/datve.api"
import { SeatMap } from "./components/SeatMap"
import { BookingSummary } from "./components/BookingSummary"
import type { Ghe } from "../services/datve.type"

export const DatVePage = () => {
  const { maLichChieu } = useParams()
  const { data, isLoading } = useQueryPhongVe(Number(maLichChieu))
  const [selectedSeats, setSelectedSeats] = useState<Ghe[]>([])
  const [isBooking, setIsBooking] = useState(false)

  if (isLoading) return <div className="text-center py-20">Loading...</div>
  if (!data) return <div className="text-center py-20">Không tìm thấy dữ liệu</div>

  const handleSelectSeat = (ghe: Ghe) => {
    // Toggle: nếu đã chọn thì bỏ, chưa chọn thì thêm
    setSelectedSeats(prev =>
      prev.some(s => s.maGhe === ghe.maGhe)
        ? prev.filter(s => s.maGhe !== ghe.maGhe)
        : [...prev, ghe]
    )
  }

  const handleConfirm = async () => {
    setIsBooking(true)
    try {
      await datVeApi.datVe({
        maLichChieu: data.thongTinPhim.maLichChieu,
        danhSachVe: selectedSeats.map(ghe => ({
          maGhe: ghe.maGhe,
          giaVe: ghe.giaVe,
        })),
      })
      alert('✅ Đặt vé thành công!')
      setSelectedSeats([])
    } catch (error) {
      alert('❌ Đặt vé thất bại!')
      console.error(error)
    } finally {
      setIsBooking(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">🎬 Chọn Ghế & Đặt Vé</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bản đồ ghế */}
          <div className="lg:col-span-2">
            <SeatMap
              danhSachGhe={data.danhSachGhe}
              selectedSeats={selectedSeats}
              onSelectSeat={handleSelectSeat}
            />
          </div>

          {/* Summary */}
          <div>
            <BookingSummary
              thongTinPhim={data.thongTinPhim}
              selectedSeats={selectedSeats}
              onConfirm={handleConfirm}
              isLoading={isBooking}
            />
          </div>
        </div>
      </div>
    </div>
  )
}