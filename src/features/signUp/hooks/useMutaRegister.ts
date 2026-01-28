import { useMutation } from '@tanstack/react-query'
import { nguoiDungApi, type RegisterPayload } from '../services'
import {toast} from 'sonner'
import { STORAGE_KEYS } from '@/constants'
import { useNavigate } from "react-router";
export const useMutaRegister = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (payload: RegisterPayload) => nguoiDungApi.register(payload),
        onSuccess(res) {
            toast.success('Đăng ký thành công')
            console.log('res', res.data.content)

            const {accessToken} = res.data.content
            localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken)
            

            // navigate to home or sign in page after register success

            navigate('/')
        }
    })
}
