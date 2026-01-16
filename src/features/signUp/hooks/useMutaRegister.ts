import { useMutation } from '@tanstack/react-query'
import { nguoiDungApi, type RegisterPayload } from '../services'

export const useMutaRegister = () => {
    return useMutation({
        mutationFn: (payload: RegisterPayload) => nguoiDungApi.register(payload),
    })
}
