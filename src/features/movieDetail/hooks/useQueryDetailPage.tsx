import { useQuery, queryOptions } from '@tanstack/react-query'
import { phimApi } from '@/features/home/services'

export const queryPhimDetailOptions = (maPhim: number) =>
  queryOptions({
    queryKey: ['phimDetail', maPhim],
    queryFn: () => phimApi.getPhimId(maPhim),
    select: (response) => response.data.content,
  })

export const useQueryPhimDetail = (maPhim: number) => {
  return useQuery(queryPhimDetailOptions(maPhim))
}
