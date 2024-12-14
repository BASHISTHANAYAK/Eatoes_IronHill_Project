/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./MarqueeText.css";

const MarqueeText = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        let scrollAmount = 0;

        const startScrolling = () => {
            const marqueeWidth = marqueeElement.scrollWidth;
            const containerWidth = marqueeElement.parentElement.offsetWidth;

            marqueeElement.style.transform = `translateX(${scrollAmount}px)`;
            scrollAmount -= 1;

            if (-scrollAmount >= marqueeWidth) {
                scrollAmount = containerWidth; // Reset to the right edge
            }

            requestAnimationFrame(startScrolling);
        };

        startScrolling();
    }, []);

    return (
        <div className="marquee-container">
            <div className="marquee-content" ref={marqueeRef}>
                This is a very important announcement, in case you missed our delicious food.
            </div>
        </div>
    );
};

export default MarqueeText;
