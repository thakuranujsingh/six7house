import { Container } from "@mui/material"
import { Box } from "@mui/system"
import { PageProps } from "gatsby"
import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroImg from "../../images/delux-room.jpg"



const RoomsPage: React.FC<PageProps> = props => (
  <Layout
    data={{
      imgUrl: HeroImg,
      heading: "Our Rooms",
      description:
        "Book this room now",
    }}
  >
    <Seo title="Our rooms" />

    <Box sx={{ padding: "60px 0 70px" }}>
      <Container maxWidth="lg">
        Our rooms
      </Container>
    </Box>
  </Layout>
)

export default RoomsPage
