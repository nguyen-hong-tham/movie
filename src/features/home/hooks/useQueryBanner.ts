import { useQuery, queryOptions } from '@tanstack/react-query'
import { phimApi } from '../services'

export const queryBannerOptions = queryOptions({
    queryKey: ['banners'],
    queryFn: () => phimApi.getBanner(),   
    select: (response) => response.data.content, 
})


export const useQueryBanner = () => {
  return useQuery(queryBannerOptions)
}
