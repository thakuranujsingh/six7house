import homeImg from "../images/home.jpg"
import slide1 from "../images/Bildschirmfoto.jpg"
import slide2 from "../images/Bildschirmfoto2.jpg"
import slide3 from "../images/Bildschirmfoto.jpg"
import slide4 from "../images/Bildschirmfoto2.jpg"

export const home = {
  hero: {
    heading:
      "Explore a place with the comfort of an Airbnb and the predictability of a hotel.",
    imgUrl: homeImg,
    isHome: true,
    showBookingOptons: true,
  },
  slider: {
    imgUrl: [slide1, slide2, slide3, slide4],
  },
}
