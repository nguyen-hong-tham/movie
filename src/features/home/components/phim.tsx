import { useQueryPhims } from "../hooks/useQueryPhims";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { PUBLIC_PATH } from "@/constants";
import "swiper/swiper.css";


export const Phim = () => {
  const { data: phims, isLoading, error } = useQueryPhims();

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error loading movies</div>;
  if (!phims || phims.length === 0)
    return <div className="p-4">No movies found</div>;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6"> Danh sách phim</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        navigation={true}
        modules={[Navigation]}
        className="w-full"
      >
        {phims.map((phim) => (
          <SwiperSlide key={phim.maPhim}>
            <Link to={PUBLIC_PATH.MOVIE_DETAIL(phim.maPhim)}> {/* Link to movie detail page */}
            <div className="movie-card">
              <div className="movie-image">
                <img
                  src={phim.hinhAnh}
                  alt={phim.tenPhim}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{phim.tenPhim}</h3>
                <p className="movie-rating">⭐ {phim.danhGia}/10</p>
                <button className="btn-datve">Đặt vé</button>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
