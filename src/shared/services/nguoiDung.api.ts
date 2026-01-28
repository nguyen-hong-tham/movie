import api from "@/shared/services/api"
import type { useQueryUserInfoByAccessTokenResponse } from "./nguoiDung.type"


export const nguoiDungApi = {
 getUserByAccessToken: () =>api.post<{content:useQueryUserInfoByAccessTokenResponse}>('/QuanLyNguoiDung/ThongTinTaiKhoan' )}