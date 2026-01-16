import api from "@/shared/services/api"
import type { LichChieuPhimResponse } from "./showtimes.type"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OSIsIkhldEhhblN0cmluZyI6IjEyLzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3ODU0NDAwMDAwMCIsIm5iZiI6MTc1MjE3MDQwMCwiZXhwIjoxNzc4Njk1MjAwfQ.9G3TvCBShsZ51V0-cziQSYic483jXaXD7dhO1aOGMZE"


//lấy từ trang showtimes.type.ts
export const showtimesApi = {
  getShowtimes: (maPhim: number) =>
    api.get<{ content: LichChieuPhimResponse }>(
      `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
      {
        headers: {
          TokenCybersoft: TOKEN,
        },
      }
    ),
}