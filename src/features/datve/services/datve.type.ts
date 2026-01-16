// datve.type.ts
export interface Ghe {
  maGhe: number
  tenGhe: string
  maRap: number
  loaiGhe: "Thuong" | "Vip"
  stt: string
  giaVe: number
  daDat: boolean
  taiKhoanNguoiDat: string | null
}

export interface ThongTinPhim {
  maLichChieu: number
  tenCumRap: string
  tenRap: string
  diaChi: string
  tenPhim: string
  hinhAnh: string
  ngayChieu: string
  gioChieu: string
}

export interface PhongVeResponse {
  thongTinPhim: ThongTinPhim
  danhSachGhe: Ghe[]
}
