import { useParams } from "react-router";
import { useQueryPhimDetail } from "../hooks/useQueryDetailPage";
import { MovieHeader } from "./MovieHeader/MovieHeader";
import { CinemaShowTimes } from "./CinemaShowTimes/CinemaShowTimes";

export const MovieDetailPage = () => {
  const { maPhim } = useParams();
  if (!maPhim) return null;

  const { data: phim, isLoading } = useQueryPhimDetail(Number(maPhim));

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (!phim) return <div className="text-center py-20">Phim không tồn tại</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-4">{phim.tenPhim}</h1>

          <div className="flex items-center gap-4 text-white/90">
            <span className="text-lg font-semibold">⭐ {phim.danhGia}/10</span>

            {phim.hot && (
              <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-bold">
                🔥 Hot
              </span>
            )}

            <span className="text-sm opacity-80">
              Khởi chiếu:{" "}
              {new Date(phim.ngayKhoiChieu).toLocaleDateString("vi-VN")}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 -mt-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <MovieHeader phim={phim} />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6">
                🎬 Chọn rạp & lịch chiếu
              </h2>
              <CinemaShowTimes maPhim={Number(maPhim)} />
            </div>
          </div>
        </div>

        {/* MÔ TẢ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
          <h2 className="text-xl font-bold mb-3">📖 Nội dung phim</h2>
          <p className="text-gray-700 leading-relaxed">
            {phim.moTa || "Chưa có mô tả"}
          </p>
        </div>
      </div>
    </div>
  );
};
