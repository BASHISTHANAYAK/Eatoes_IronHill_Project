import ImageCarousel from "../assets/ImageCarousel"
import MarqueeText from "../assets/MarqueeText"
import imgSlideCss from "../styles/Res_Name_And_imgSlide.module.css"
const Res_Name_And_imgSlide = () => {
  return (
    <div>
      <nav>
        <p className={imgSlideCss.leftArrow}>
          <i className="fa-regular fa-arrow-left"></i>
        </p>
        <p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8EUOCb7us_p_OH2_937RQxS03w5k72Z6Uw&s" alt="" />
        </p>
        <p className={imgSlideCss.restName}>
          Iron hill bengaluru
        </p>
      </nav>
      {/* image Carousel */}
      <ImageCarousel />

      {/* import yellow text auto scrolling  */}
      <MarqueeText />
    </div>
  )
}

export default Res_Name_And_imgSlide