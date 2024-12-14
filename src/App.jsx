
import './App.css'
import Res_Name_And_imgSlide from './components/Res_Name_And_imgSlide'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveCircularCarousel from './components/CircularImageCarousel ';
import FavBurgerAndSignin from './components/FavBurgerAndSignin';

function App() {

  return (

    <>
      <Res_Name_And_imgSlide />
      <ResponsiveCircularCarousel />
      <FavBurgerAndSignin />

    </>
  )
}

export default App
