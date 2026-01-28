import api from "@/shared/services/api";
import type { PhongVe,  DatVePayload , ApiResponse } from "./booking.type";

//Tạo API function để gọi các endpoint từ backend. 
// Đây là "cầu nối" giữa frontend và API server.
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OSIsIkhldEhhblN0cmluZyI6IjEyLzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3ODU0NDAwMDAwMCIsIm5iZiI6MTc1MjE3MDQwMCwiZXhwIjoxNzc4Njk1MjAwfQ.9G3TvCBShsZ51V0-cziQSYic483jXaXD7dhO1aOGMZE";

export const bookingApi = {
  getPhongVe: (maLichChieu: number) =>
    api.get<ApiResponse<PhongVe>>(
      `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      {
        headers: {
          TokenCybersoft: TOKEN,
        },
      }
    ),

  // ============================================
  // 2. ĐẶT VÉ
  // ============================================
  submitBooking: (data: DatVePayload) =>
    api.post<ApiResponse<string>>(
      "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data,
      {
        headers: {
          TokenCybersoft: TOKEN,
        },
      }
    ),
}