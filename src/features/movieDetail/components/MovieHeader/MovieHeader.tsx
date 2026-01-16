import type { Phim } from "@/features/home/services/phim.type"

type Props = {
  phim?: Phim
}

export const MovieHeader = ({ phim }: Props) => {
  if (!phim) return <div className="text-center py-8">Loading...</div>

  const releaseDate = new Date(phim.ngayKhoiChieu)
  const today = new Date()

  // FE tự quyết định trạng thái (KHÔNG tin flag API)
  const isSapChieu = releaseDate > today
  const isDangChieu = releaseDate <= today

  return (
    <div className="sticky top-20 space-y-4">

      {/* Poster */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={phim.hinhAnh}
          alt={phim.tenPhim}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Tên phim */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
        {phim.tenPhim}
      </h1>

      {/* Mô tả */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {phim.moTa || "Không có mô tả"}
      </p>

      {/* Thông tin phụ */}
      <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase">Đánh giá</p>
          <p className="text-xl font-bold text-yellow-500">
            ⭐ {phim.danhGia}/10
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase">Khởi chiếu</p>
          <p className="text-sm font-semibold text-gray-900">
            {releaseDate.toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>

      {/* Trạng thái */}
      <div className="flex gap-2 flex-wrap">
        {isDangChieu ? (
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
             Đang chiếu
          </span>
        ) : (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
             Sắp chiếu
          </span>
        )}

        {phim.hot && (
          <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full">
             Hot
          </span>
        )}
      </div>

      {/* Nút Đặt vé */}
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
         Đặt Vé Ngay
      </button>

      {/* Trailer */}
      {phim.trailer && (
        <a
          href={phim.trailer}
          target="_blank"
          rel="noreferrer"
          className="block w-full border-2 border-gray-300 hover:border-red-600 text-gray-900 hover:text-red-600 font-bold py-3 px-4 rounded-lg transition duration-200 text-center"
        >
          Xem Trailer
        </a>
      )}
    </div>
  )
}
