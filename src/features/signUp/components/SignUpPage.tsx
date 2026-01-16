import { Button, Form, FormItem, Input, Spinner } from '@/core/ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSignUpSchema } from '../schema'
import { useMutaRegister } from '../hooks'
import { toast } from 'sonner'

// import { z } from 'zod'
// const schema = z.object({
//     firstName: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
//     lastName: z.string().min(2, 'Họ phải có ít nhất 2 ký tự'),
// })

export const SignUpPage = () => {
    const registerMutation = useMutaRegister()

    const form = useForm({
        mode: 'onChange',
        resolver: zodResolver(FormSignUpSchema),
        defaultValues: {
            hoTen: '',
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
        },
    })

    return (
        <section className="py-10">
            <h2 className="text-3xl font-semibold">Đăng ký</h2>
            <Form
                form={form}
                className="space-y-6 mt-10"
                onSubmit={async (values) => {
                    try {
                        await registerMutation.mutateAsync(values)
                        toast.success('Đăng ký thành công')
                    } catch (error: any) {
                        console.log({ error })
                        toast.error(error?.response?.data?.content || 'Đăng ký thất bại')
                    }
                }}
            >
                <FormItem control={form.control} label="Họ và tên" name="hoTen" required>
                    <Input />
                </FormItem>
                <FormItem control={form.control} label="Tài khoản" name="taiKhoan" required>
                    <Input />
                </FormItem>
                <FormItem control={form.control} label="Mật khẩu" name="matKhau" required>
                    <Input />
                </FormItem>
                <FormItem control={form.control} label="Email" name="email" required>
                    <Input />
                </FormItem>
                <FormItem control={form.control} label="Số điện thoại" name="soDt" required>
                    <Input />
                </FormItem>
                <FormItem control={form.control} label="Mã nhóm" name="maNhom" required>
                    <Input />
                </FormItem>
                <Button type="submit" disabled={registerMutation.isPending}>
                    {registerMutation.isPending && <Spinner />}
                    Đăng ký
                </Button>
            </Form>
        </section>
    )
}
