import { useMutation } from '@tanstack/react-query'
import { nguoiDungApi, type SignInPayload } from '../services'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'
import { STORAGE_KEYS} from '@/constants' 
import { useAppDispatch } from '@/store'
import { setCredentials } from '@/store/auth.slice'
export const useMutaSignIn = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return useMutation({
    mutationFn:(payload: SignInPayload) => nguoiDungApi.SignIn(payload),
    onSuccess(data) {
      toast.success('Đăng nhập thành công')
      console.log('data', data.data.content)

      // lưu token vào localstorage
      const {accessToken} = data.data.content
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken  )
      
      // lưu vào redux
      dispatch(setCredentials(accessToken)) 

      // navigate về trang trước đó hoặc trang home
      navigate('/')
      
    }
  })
}
