import { useQuery, queryOptions } from '@tanstack/react-query'    
import { nguoiDungApi } from '../services'


const queryOptionsUserInfo = queryOptions ({
    queryKey: ['userInfo'],
    queryFn: () => nguoiDungApi.getUserByAccessToken(),
    select : (data) => data.data.content,
})
export const useQueryUserInfoByAccessToken = () => {
  return useQuery (queryOptionsUserInfo)
}
