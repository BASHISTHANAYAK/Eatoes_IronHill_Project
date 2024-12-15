


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import UpcomingEventsCss from "../styles/UpcomingEvents.module.css";

const Carousel = () => {

  const slides = [
    { id: 1, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent1.jpg?raw=true", title: "Image 1" },
    { id: 2, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent2.jpg?raw=true", title: "DJ Night by Stephen | Dec 02" },
    { id: 3, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent3.jpg?raw=true", title: "Image 3" },
    { id: 4, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent4.jpg?raw=true", title: "Image 4" },
    { id: 5, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent1.jpg?raw=true", title: "Image 5" },
    { id: 6, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent2.jpg?raw=true", title: "DJ Night by Stephen | Dec 02" },
    { id: 7, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent3.jpg?raw=true", title: "Image 7" },
    { id: 8, src: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/upcomingEvent4.jpg?raw=true", title: "Image 8" },
    
  ];


  return (

    <div className={UpcomingEventsCss.carouselContainer}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"} /* Ensures proper sizing */
        spaceBetween={5} /* Adds gaps */
        initialSlide={1} /* Start at the second image */
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className={UpcomingEventsCss.mySwiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={UpcomingEventsCss.swiperCustomSlide}>
            <div className={UpcomingEventsCss.slide}>
              <i className={`fa-light fa-heart ${UpcomingEventsCss.swiperCustomSlideHeart}`}></i>
              <img
                src={slide.src}
                alt={slide.title}
                className={UpcomingEventsCss.carouselImage}
              />
              <div className={UpcomingEventsCss.content}>
                <p>{slide.title}</p>
                <button className={UpcomingEventsCss.buyNowBtn}>Buy Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default Carousel;
