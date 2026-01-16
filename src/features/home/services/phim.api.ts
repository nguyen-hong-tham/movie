import api from "@/shared/services/api";
import type { Banner, Phim } from "./phim.type";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OSIsIkhldEhhblN0cmluZyI6IjEyLzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3ODU0NDAwMDAwMCIsIm5iZiI6MTc1MjE3MDQwMCwiZXhwIjoxNzc4Njk1MjAwfQ.9G3TvCBShsZ51V0-cziQSYic483jXaXD7dhO1aOGMZE";

export const phimApi = {
  getBanner: () =>
    api.get<{ content: Banner[] }>(
      "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      {
        headers: {
          TokenCybersoft: TOKEN,
        },
      }
    ),

  getPhims: () =>
    api.get<{ content: Phim[] }>(
      "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      {
        headers: {
          TokenCybersoft: TOKEN,
        },
      }
    ),

  getPhimId: (maPhim: number) =>
    api.get<{ content: Phim }>(
      `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      {
        headers: {
          TokenCybersoft: TOKEN,
        },
      }
    ),
};
