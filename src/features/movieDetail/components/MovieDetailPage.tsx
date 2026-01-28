import { useParams } from "react-router";
import { useQueryPhimDetail } from "../hooks/useQueryDetailPage";
import { MovieHeader } from "./MovieHeader/MovieHeader";
import { CinemaShowTimes } from "./CinemaShowTimes/CinemaShowTimes";
import { useState } from "react";
import { BookingModal } from "@/features/datve/components";
import { useAppSelector } from "@/store";
import { useNavigate } from "react-router-dom";

export const MovieDetailPage = () => {
  const { maPhim } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(state => state.auth);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedMaLichChieu, setSelectedMaLichChieu] = useState<number>(0);

  if (!maPhim) return null;

  const { data: phim, isLoading } = useQueryPhimDetail(Number(maPhim));

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (!phim) return <div className="text-center py-20">Phim không tồn tại</div>;

  const handleSelectShowtime = (maLichChieu: number) => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      alert("Vui lòng đăng nhập để đặt vé!");
      navigate("/sign-up");
      return;
    }
    
    console.log(" Select showtime:", maLichChieu);
    setSelectedMaLichChieu(maLichChieu);
    setIsBookingOpen(true);
  };


  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION WITH BACKGROUND */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${phim.hinhAnh})`,
          minHeight: "500px",
        }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10 flex items-center justify-between h-full">
          {/* LEFT: Poster */}
          <div className="hidden lg:block lg:w-1/4 shrink-0">
            <img
              src={phim.hinhAnh}
              alt={phim.tenPhim}
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>

          {/* RIGHT: Info */}
          <div className="flex-1 lg:ml-12 text-white">
            <h1 className="text-5xl font-bold mb-6">{phim.tenPhim}</h1>

            <div className="flex items-center gap-6 mb-6 text-lg">
              <span className="font-semibold">⭐ {phim.danhGia}/10</span>

              {phim.hot && (
                <span className="px-4 py-2 bg-red-600 rounded-full font-bold">
                  🔥 Hot
                </span>
              )}

              <span className="opacity-90">
                Khởi chiếu:{" "}
                {new Date(phim.ngayKhoiChieu).toLocaleDateString("vi-VN")}
              </span>
            </div>


            <div className="flex gap-4">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-white transition">
                🎫 Đặt Vé Ngay
              </button>
              {phim.trailer && (
                <a
                  href={phim.trailer}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-bold transition"
                >
                  ▶ Xem Trailer
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT - HIDDEN ON DESKTOP (already in hero) */}
          <div className="lg:hidden lg:col-span-2">
            <MovieHeader phim={phim} />
          </div>
        </div>

        {/* MÔ TẢ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
          <h2 className="text-xl font-bold mb-3">📖 Nội dung phim</h2>
          <p className="text-gray-700 leading-relaxed">
            {phim.moTa || "Chưa có mô tả"}
          </p>
        </div>

        {/* Cinema ShowTimes */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-10">
          <h2 className="text-2xl font-bold mb-6">
             Chọn rạp & lịch chiếu
          </h2>

          <CinemaShowTimes
            maPhim={Number(maPhim)}
            onSelectShowtime={handleSelectShowtime}
          />
        </div>

        {/* Booking Modal */}
        <BookingModal
          maLichChieu={selectedMaLichChieu}
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />

      </div>
    </div>
  );
};
