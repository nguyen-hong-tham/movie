type LoaiNguoiDung = {
  maLoaiNguoiDung: string
  tenLoai: string
}

type DanhSachGhe = {
  maHeThongRap: string
  tenHeThongRap: string
  maCumRap: string
  tenCumRap: string
  maRap: number
  tenRap: string
  maGhe: number
  tenGhe: string
}

type ThongTinDatVe = {
  danhSachGhe: DanhSachGhe[]
  maVe: number
  ngayDat: string
  tenPhim: string
  hinhAnh: string
  giaVe: number
  thoiLuongPhim: number
}

export type useQueryUserInfoByAccessTokenResponse = {
  taiKhoan: string
  matKhau: string
  hoTen: string
  email: string
  soDT: string
  maNhom: string
  maLoaiNguoiDung: string
  loaiNguoiDung: LoaiNguoiDung
  thongTinDatVe: ThongTinDatVe[]
}