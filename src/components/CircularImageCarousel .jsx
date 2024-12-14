/* eslint-disable react/prop-types */







import { useRef } from "react";
import "../styles/CircularImageCarousel.css";

const ResponsiveCircularCarousel = () => {
    const carouselRef = useRef(null);

    const images = [
        "https://www.allrecipes.com/thmb/kb1-BBI4R62tIuWa-v4Uo6oIuro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-232375-Natashas-Chicken-Burgers-DDMFS-4x3-9e38dbcfe07449909179ab8ae8552f92.jpg", // Add your image URLs
        "https://static.toiimg.com/thumb/60347232.cms?imgsize=510458&width=800&height=800",
        "https://content.jdmagicbox.com/comp/ahmedabad/w3/079pxx79.xx79.211112213107.g1w3/catalogue/raj-omlet-corner-hatkeshwar-ahmedabad-fast-food-hmbuwub4ay.jpg",
        "https://www.kannammacooks.com/wp-content/uploads/ros-omelette-veg-recipe-Goan-ras-omlet-17.jpg",
        "https://www.allrecipes.com/thmb/kb1-BBI4R62tIuWa-v4Uo6oIuro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-232375-Natashas-Chicken-Burgers-DDMFS-4x3-9e38dbcfe07449909179ab8ae8552f92.jpg", // Add your image URLs
        "https://static.toiimg.com/thumb/60347232.cms?imgsize=510458&width=800&height=800",
        "https://content.jdmagicbox.com/comp/ahmedabad/w3/079pxx79.xx79.211112213107.g1w3/catalogue/raj-omlet-corner-hatkeshwar-ahmedabad-fast-food-hmbuwub4ay.jpg",
        "https://www.kannammacooks.com/wp-content/uploads/ros-omelette-veg-recipe-Goan-ras-omlet-17.jpg",
        "https://www.allrecipes.com/thmb/kb1-BBI4R62tIuWa-v4Uo6oIuro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-232375-Natashas-Chicken-Burgers-DDMFS-4x3-9e38dbcfe07449909179ab8ae8552f92.jpg", // Add your image URLs
        "https://static.toiimg.com/thumb/60347232.cms?imgsize=510458&width=800&height=800",
        "https://www.allrecipes.com/thmb/kb1-BBI4R62tIuWa-v4Uo6oIuro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-232375-Natashas-Chicken-Burgers-DDMFS-4x3-9e38dbcfe07449909179ab8ae8552f92.jpg", // Add your image URLs
        "https://static.toiimg.com/thumb/60347232.cms?imgsize=510458&width=800&height=800",
        "https://content.jdmagicbox.com/comp/ahmedabad/w3/079pxx79.xx79.211112213107.g1w3/catalogue/raj-omlet-corner-hatkeshwar-ahmedabad-fast-food-hmbuwub4ay.jpg",
        "https://www.kannammacooks.com/wp-content/uploads/ros-omelette-veg-recipe-Goan-ras-omlet-17.jpg",
    ];



    // Navigate carousel on arrow click
    const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;
        const scrollAmount = 120; // Amount to scroll per click
        if (direction === "left") {
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const handleDrag = () => {
        const carousel = carouselRef.current;
        let startX = 0;
        let scrollLeft = 0;

        const onDragStart = (e) => {
            startX = e.touches ? e.touches[0].pageX : e.pageX;
            scrollLeft = carousel.scrollLeft;
            carousel.style.scrollBehavior = "auto";
        };

        const onDragMove = (e) => {
            if (!startX) return;
            const x = e.touches ? e.touches[0].pageX : e.pageX;
            const walk = startX - x;
            carousel.scrollLeft = scrollLeft + walk;
        };

        const onDragEnd = () => {
            startX = 0;
            carousel.style.scrollBehavior = "smooth";
        };

        carousel.addEventListener("mousedown", onDragStart);
        carousel.addEventListener("mousemove", onDragMove);
        carousel.addEventListener("mouseup", onDragEnd);
        carousel.addEventListener("touchstart", onDragStart);
        carousel.addEventListener("touchmove", onDragMove);
        carousel.addEventListener("touchend", onDragEnd);

        return () => {
            carousel.removeEventListener("mousedown", onDragStart);
            carousel.removeEventListener("mousemove", onDragMove);
            carousel.removeEventListener("mouseup", onDragEnd);
            carousel.removeEventListener("touchstart", onDragStart);
            carousel.removeEventListener("touchmove", onDragMove);
            carousel.removeEventListener("touchend", onDragEnd);
        };
    };

    return (
        <div className="carousel-wrapper">
            <button className="arrow left" onClick={() => scrollCarousel("left")}>
                &#8249;
            </button>
            <div
                className="carousel-container"
                ref={carouselRef}
                onMouseDown={handleDrag}
                onTouchStart={handleDrag}
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="arrow right" onClick={() => scrollCarousel("right")}>
                &#8250;
            </button>
        </div>
    );
};

export default ResponsiveCircularCarousel;
