import { useQuery } from "@tanstack/react-query";
import { showtimesApi } from "../services/showtimes.api";
import type { LichChieuPhimResponse } from "../services/showtimes.type";


// lấy từ trang showtimes.api.ts
export const useQueryShowtimes = (maPhim: number) => {
  return useQuery({
    queryKey: ["showtimes", maPhim],
    queryFn: () => showtimesApi.getShowtimes(maPhim),
    select: (response) => response.data.content,
  });
};