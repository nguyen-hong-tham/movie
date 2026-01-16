import z from 'zod/v4'

export const FormSignUpSchema = z.object({
    hoTen: z.string().min(1, { error: 'Vui lòng nhập họ và tên' }),
    taiKhoan: z.string().min(1, { error: 'Vui lòng nhập tài khoản' }),
    matKhau: z.string().min(1, { error: 'Vui lòng nhập mật khẩu' }),
    email: z.email({ error: 'Vui lòng nhập đúng định dạng email' })
    .min(1, { error: 'Vui lòng nhập email' }),
    soDt:z.string().min(1, { error: 'Vui lòng nhập số điện thoại' }),
    maNhom: z.string().min(1, { error: 'Vui lòng nhập mã nhóm' }),
})
