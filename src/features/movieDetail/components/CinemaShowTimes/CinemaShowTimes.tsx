import { useParams } from "react-router";
import { useQueryShowtimes } from "../../hooks/useQueryShowtimes";
import { useState } from "react";

interface CinemaShowTimesProps {
  maPhim: number;
  onSelectShowtime?: (maLichChieu: number) => void;
}

export const CinemaShowTimes = ({ maPhim: paramMaPhim, onSelectShowtime }: CinemaShowTimesProps) => {
  const { maPhim } = useParams();
  const { data, isLoading } = useQueryShowtimes(Number(paramMaPhim));
  const [activeIndex, setActiveIndex] = useState(0);
  const currentHeThong = data?.heThongRapChieu[activeIndex];
  if (isLoading || !data) return <div>Loading...</div>;

  console.log("SHOWTIMES:", data);

  return (
    <div className=" grid grid-cols-3 gap-6">
      {/* Cột trái - hệ thống rạp */}
      <div className="space-y-4">
        {data?.heThongRapChieu.map((heThongRap, index) => (
          <button
            key={heThongRap.maHeThongRap}
            onClick={() => setActiveIndex(index)}
            className={`block p-2 ${
              index === activeIndex ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={heThongRap.logo}
              alt={heThongRap.tenHeThongRap}
              className="w-12  mx-auto"
            />
          </button>
        ))}
      </div>

      {/* Cột giữa - cụm rạp */}
      <div className="space-y-6">
        {currentHeThong?.cumRapChieu.map((cumRap) => (
          <div key={cumRap.maCumRap}>
            <h3 className="font-semibold">{cumRap.tenCumRap}</h3>
            <p className="text-sm text-gray-500">{cumRap.diaChi}</p>
            {/* Lịch chiếu */}
            <div className="flex flex-wrap gap-2 mt-2">
              {cumRap.lichChieuPhim.map((lich) => (
                <button
                  onClick={() => onSelectShowtime?.(Number(lich.maLichChieu))}
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1 rounded font-semibold text-sm transition duration-200"
                >
                  {new Date(lich.ngayChieuGioChieu).toLocaleTimeString(
                    "vi-VN",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
