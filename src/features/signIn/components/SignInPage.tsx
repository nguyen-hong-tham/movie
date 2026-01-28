import React from 'react'
 import { Button, Form, FormItem, Input, Spinner } from '@/core/ui'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { useMutaSignIn } from '../hooks'
const schema = z.object({
    taiKhoan: z.string().min(2, 'Tài khoản phải có ít nhất 2 ký tự'),
    matKhau: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
})

type FormData = z.infer<typeof schema>
export const SignInPage = () => {

    const signInMutation = useMutaSignIn()


    const form = useForm<FormData >({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            taiKhoan: '',
            matKhau: '',
        },
    }) 


    const onSubmit = (values: FormData) => {
        // xử lý đăng nhập
        // goi API
        signInMutation.mutate(values)
    }
  return (
    <div>
        <h2 className='font-semibold text-3xl'>
            Đăng nhập
        </h2>
        {/* values dựa vào schema mà mình định nghĩa */}
        <Form form={form} className='mt-10 space-y-6' onSubmit={onSubmit}>
            {/* form đăng nhập */}  
            <FormItem control={form.control} label="Tài khoản" name="taiKhoan" required>
                <Input  />
            </FormItem>
            
            {
                /* form mật khẩu */
            }
             <FormItem control={form.control} label="Mật khẩu" name="matKhau" required>
                <Input type='password' />
            </FormItem>

            <Button disabled={signInMutation.isPending}>
                {signInMutation.isPending && <Spinner />}
                Đăng nhập
            </Button>
        </Form>
    </div>
  )
}
