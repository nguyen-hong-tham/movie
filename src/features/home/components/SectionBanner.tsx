import { useQueryBanner } from "../hooks/useQueryBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/swiper.css";
import { Link } from "react-router-dom";
import { PUBLIC_PATH } from "@/constants/path";

export const SectionBanner = () => {
  const { data: banners, isLoading, error } = useQueryBanner();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading banners</div>;
  if (!banners?.length) return null;

  return (
    <section className="banner-section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        speed={600}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        onSwiper={(swiper) => {
          swiper.autoplay.start();
        }}
        onSlideChange={(swiper) => {
          console.log("slide", swiper.realIndex);
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.maBanner}>
            <Link to={PUBLIC_PATH.MOVIE_DETAIL(banner.maPhim)}>
              <div className="banner">
                <img
                  src={banner.hinhAnh}
                  alt="banner"
                  className="banner-img"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
