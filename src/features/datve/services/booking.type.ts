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
export type LoaiGhe = 'Thuong' | 'Vip'

export interface Ghe {
  maGhe: number
  tenGhe: string
  maRap: number
  loaiGhe: LoaiGhe
  stt: string
  giaVe: number
  daDat: boolean
  taiKhoanNguoiDat: string | null
}
export interface PhongVe {
  thongTinPhim: ThongTinPhim
  danhSachGhe: Ghe[]
}
export interface ApiResponse<T> {
  statusCode: number
  message: string
  content: T
}
export interface DatVePayload {
  maLichChieu: number
  danhSachVe: {
    maGhe: number
    giaVe: number
  }[]
}
