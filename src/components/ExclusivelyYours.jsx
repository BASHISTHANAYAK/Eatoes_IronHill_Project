import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/Exclusively.module.css";

const Exclusively = () => {
    const items = [
        { id: 1, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/ExclusivelyImg1.jpg?raw=true", text: "Chicken Burger" },
        { id: 2, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/ExclusivelyImg2.jpg?raw=true.jpg", text: "French Fries" },
        { id: 3, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/ExclusivelyImg3.jpg?raw=true", text: "Beer" },
        { id: 4, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/ExclusivelyImg4.jpg?raw=true", text: "Pasta" },
        { id: 5, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/ExclusivelyImg1.jpg?raw=true", text: "Chicken Burger" },
        { id: 6, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/ExclusivelyImg2.jpg?raw=true.jpg", text: "French Fries" },

    ];

    return (
        <div className={styles.carouselContainer}>
            <Swiper
                modules={[Navigation]}
                slidesPerView={2} // Default for mobile
                spaceBetween={15}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                grabCursor={true}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <div className={styles.box}>
                            <img src={item.image} alt={item.text} className={styles.image} />
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Arrows */}
                <div className={`${styles.navButton} swiper-button-prev`}></div>
                <div className={`${styles.navButton} swiper-button-next`}></div>
            </Swiper>
        </div>
    );
};

export default Exclusively;
