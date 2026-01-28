export type SignInPayload = {
  taiKhoan: string;
  matKhau: string;
};

export type SignInResponse = {
  accessToken: string;
  email: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  taiKhoan: string;
  soDT: string;
};
