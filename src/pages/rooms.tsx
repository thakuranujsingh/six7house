import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import heroImg from "../images/delux-room.jpg"

const OurRooms = () => (
  <Layout
    data={{
      heading: "Our Rooms",
      description: "Book this room now",
      imgUrl: heroImg,
    }}
  >
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OurRooms
