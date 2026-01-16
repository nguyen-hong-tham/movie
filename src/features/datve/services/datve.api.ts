import api from "@/shared/services/api"
import type { PhongVeResponse } from "./datve.type"

export const datVeApi = {
  //  GET sơ đồ ghế Chỉ để XEM  - Xem ghế - Xem giá - Xem ghế đã đặt
  
  getPhongVe: (maLichChieu: number) =>
    api.get<{ content: PhongVeResponse }>(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    ),

  //  POST đặt vé ÂY LÀ HÀNH ĐỘNG - Đặt ghế - Giữ ghế - Trừ vé - Ghi dữ liệu vào DB
  datVe: (payload: {
    maLichChieu: number
    danhSachVe: {
      maGhe: number
      giaVe: number
    }[]
  }) =>
    api.post("/api/QuanLyDatVe/DatVe", payload),
}
