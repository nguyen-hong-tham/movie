import api from "@/shared/services/api"
import type { SignInPayload,SignInResponse } from "./nguoiDung.type"

export const nguoiDungApi = {
  SignIn: (payload: SignInPayload) =>
     api.post<{content:SignInResponse}>('/QuanLyNguoiDung/DangNhap', payload)
}