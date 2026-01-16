
// LichChieuPhim type con của CumRapChieu
export interface LichChieuPhim {
  maLichChieu: string
  maRap: string
  tenRap: string
  ngayChieuGioChieu: string
  giaVe: number
  thoiLuong: number
}

// CumRapChieu type con của HeThongRapChieu
export interface CumRapChieu {
  maCumRap: string
  tenCumRap: string
  hinhAnh: string
  diaChi: string
  lichChieuPhim: LichChieuPhim[]
}

// HeThongRapChieu type con của LichChieuPhimResponse
export interface HeThongRapChieu {
  maHeThongRap: string
  tenHeThongRap: string
  logo: string
  cumRapChieu: CumRapChieu[]
}
// LichChieuPhimResponse type gốc trả về từ API
export interface LichChieuPhimResponse {
  maPhim: number
  tenPhim: string
  biDanh: string
  trailer: string
  hinhAnh: string
  moTa: string
  maNhom: string
  hot: boolean
  dangChieu: boolean
  sapChieu: boolean
  ngayKhoiChieu: string
  danhGia: number
  heThongRapChieu: HeThongRapChieu[]
}
