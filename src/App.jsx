
import './App.css'
import Res_Name_And_imgSlide from './components/Res_Name_And_imgSlide'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveCircularCarousel from './components/CircularImageCarousel ';
import FavBurgerAndSignin from './components/FavBurgerAndSignin';
import UpcomingEvents from './components/UpcomingEvents';
import Exclusively from './components/ExclusivelyYours';
import Categories from './components/Categories';

function App() {

  return (

    <>
      <Res_Name_And_imgSlide />
      <ResponsiveCircularCarousel />
      <FavBurgerAndSignin />
      {/*  */}
      <h3 className='UpcomingHeadingTxt'>Upcoming Events</h3>
      <UpcomingEvents />
      {/* ExclusivelyYours */}
      <h3 className='ExclusivelyHeadingTxt'>Exclusively yours</h3>
      <Exclusively />
      {/* Categories */}
      <h3 className='CategoriesHeadingTxt'>Categories</h3>

      <Categories />

    </>
  )
}

export default App
