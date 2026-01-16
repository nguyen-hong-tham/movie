import { useQuery, queryOptions } from '@tanstack/react-query'
import { phimApi } from '../services'

export const queryPhimsOptions = queryOptions({
    queryKey: ['phims'],
    queryFn: () => phimApi.getPhims(),
    select: (response) => response.data.content,
})


export const useQueryPhims = () => {
  return useQuery(queryPhimsOptions)
}
