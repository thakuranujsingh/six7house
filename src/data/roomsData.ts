import slide1 from "../images/Bildschirmfoto.jpg"
import slide2 from "../images/Bildschirmfoto2.jpg"
import slide3 from "../images/Bildschirmfoto.jpg"
import slide4 from "../images/Bildschirmfoto2.jpg"
import roomLayout from "../images/room-layout.jpg"
import premierHeroImg from "../images/premiere-room.jpg"
import deluxHeroImg from "../images/delux-room.jpg"

export const roomsData = {
  premiers: {
    name: "Premier Suite",
    shorName: "Premier",
    pageUrl: "/rooms/premier",
    heroImg: premierHeroImg,
    description:
      "An Cape Town style room with a natural set of design details to add up to a king size bed and a large private terrace. Contemporary elements like copper and limestone on the wall, or stone pebble floors in its large bathroom",
    roomDetail: [
      "38 - 45 sqm (inc. terrace)",
      "Double beds",
      "Shower and tub",
      "Pillow menu",
      "Unlimited access to spa",
      "Terrace",
      "High velocity wifi",
      "Bang & Olufsen",
      "Coffee-point",
    ],
    slider: {
      imgUrl: [slide1, slide2, slide3, slide4],
    },
    roomDiagram: roomLayout,
  },
  junior: {
    name: "Junior Suite ",
    shorName: "Junior",
    pageUrl: "/rooms/junior",
    heroImg: deluxHeroImg,
    description:
      "An Cape Town style room with a natural set of design details to add up to a king size bed and a large private terrace. Contemporary elements like copper and limestone on the wall, or stone pebble floors in its large bathroom",
    roomDetail: [
      "38 - 45 sqm (inc. terrace)",
      "Double beds",
      "Shower and tub",
      "Pillow menu",
      "Unlimited access to spa",
      "Terrace",
      "High velocity wifi",
      "Bang & Olufsen",
      "Coffee-point",
    ],
    slider: {
      imgUrl: [slide1, slide2, slide3, slide4],
    },
    roomDiagram: roomLayout,
  },
  deluxe: {
    name: "Deluxe Suite",
    shorName: "Deluxe",
    pageUrl: "/rooms/deluxe",
    heroImg: deluxHeroImg,
    description:
      "An Cape Town style room with a natural set of design details to add up to a king size bed and a large private terrace. Contemporary elements like copper and limestone on the wall, or stone pebble floors in its large bathroom",
    roomDetail: [
      "38 - 45 sqm (inc. terrace)",
      "Double beds",
      "Shower and tub",
      "Pillow menu",
      "Unlimited access to spa",
      "Terrace",
      "High velocity wifi",
      "Bang & Olufsen",
      "Coffee-point",
    ],
    slider: {
      imgUrl: [slide1, slide2, slide3, slide4],
    },
    roomDiagram: roomLayout,
  },
  senior: {
    name: "Senior Suite ",
    shorName: "Senior",
    pageUrl: "/rooms/senior",
    heroImg: premierHeroImg,
    description:
      "An Cape Town style room with a natural set of design details to add up to a king size bed and a large private terrace. Contemporary elements like copper and limestone on the wall, or stone pebble floors in its large bathroom",
    roomDetail: [
      "38 - 45 sqm (inc. terrace)",
      "Double beds",
      "Shower and tub",
      "Pillow menu",
      "Unlimited access to spa",
      "Terrace",
      "High velocity wifi",
      "Bang & Olufsen",
      "Coffee-point",
    ],
    slider: {
      imgUrl: [slide1, slide2, slide3, slide4],
    },
    roomDiagram: roomLayout,
  },
}
