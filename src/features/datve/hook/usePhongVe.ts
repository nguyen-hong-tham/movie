import { useQuery } from "@tanstack/react-query";
import { bookingApi } from "../services/booking.api";
import type { PhongVe } from "../services/booking.type";

// ============================================
// Hook: Lấy thông tin phòng vé + danh sách ghế
// ============================================
export const usePhongVe = (maLichChieu: number) => {
  return useQuery<PhongVe>({
    queryKey: ["phongVe", maLichChieu],

    // chỉ gọi API khi có mã lịch chiếu hợp lệ
    enabled: !!maLichChieu,

    queryFn: async () => {
      console.log(" Calling API getPhongVe:", maLichChieu);

      try {
        const response = await bookingApi.getPhongVe(maLichChieu);

       

        // API Cybersoft trả về: { statusCode, message, content }
        let data = response.data.content;

        // Nếu content là array, lấy phần tử đầu
        if (Array.isArray(data)) {
          data = data[0];
        }


        return data as PhongVe;
      } catch (error) {
        console.error(" API Error:", error);
        throw error;
      }
    },
  });
};
