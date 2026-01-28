import { useQueryShowtimes } from "../../hooks/useQueryShowtimes";
import { useState } from "react";
import { CumRap } from "./CumRap";

interface CinemaShowTimesProps {
  maPhim: number;
  onSelectShowtime?: (maLichChieu: number) => void;
}

export const CinemaShowTimes = ({ maPhim: paramMaPhim, onSelectShowtime }: CinemaShowTimesProps) => {
  const { data, isLoading } = useQueryShowtimes(Number(paramMaPhim));
   console.log(" SHOWTIMES DATA:", data);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentHeThong = data?.heThongRapChieu?.[activeIndex];
 

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-6">
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
              className="w-12 mx-auto"
            />
          </button>
        ))}
      </div>

      {/* Cột giữa - cụm rạp */}
      <div className="space-y-6">
        {currentHeThong?.cumRapChieu.map((cumRap) => (
          <CumRap
            key={cumRap.maCumRap}
            cumRap={cumRap}
            onSelectShowtime={onSelectShowtime}
          />
        ))}
      </div>
    </div>
  );
};
