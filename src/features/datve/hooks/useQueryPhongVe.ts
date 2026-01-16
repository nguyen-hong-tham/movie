import { useQuery } from "@tanstack/react-query"
import { datVeApi } from "../services/datve.api"
import type { PhongVeResponse } from "../services/datve.type"
//LẤY DỮ LIỆU PHÒNG VÉ TỪ SERVER → ĐƯA CHO PAGE DÙNG
export const useQueryPhongVe = (maLichChieu: number) => {
  return useQuery<PhongVeResponse>({
    queryKey: ["phong-ve", maLichChieu],
    queryFn: async () => {
      const response = await datVeApi.getPhongVe(maLichChieu)
      return response.data?.content || response
    },
    enabled: !!maLichChieu,
  })
}