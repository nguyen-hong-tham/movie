import type { CumRapChieu } from "../../services/showtimes.type";
import { ShowTimeItem } from "./ShowTimeItem";

interface CumRapProps {
  cumRap: CumRapChieu;
  onSelectShowtime?: (maLichChieu: number) => void;
}

export const CumRap = ({ cumRap, onSelectShowtime }: CumRapProps) => {
  console.log("CỤM RẠP:", cumRap.tenCumRap);
  console.log(" LỊCH CHIẾU:", cumRap.lichChieuPhim);
  return (
    <div>
      <h3 className="font-semibold">{cumRap.tenCumRap}</h3>
      <p className="text-sm text-gray-500">{cumRap.diaChi}</p>
      
      {/* Lịch chiếu */}
      <div className="flex flex-wrap gap-2 mt-2">
        {cumRap.lichChieuPhim.map((lich) => (
          <ShowTimeItem
            key={lich.maLichChieu}
            lich={lich}
            onSelectShowtime={onSelectShowtime}
          />
        ))}
      </div>
    </div>
  );
};
