import api from '@/shared/services/api'
import type { RegisterPayload } from './nguoiDung.type'

export const nguoiDungApi = {
    register: (payload: RegisterPayload) => api.post('/QuanLyNguoiDung/DangKy', payload),
}
