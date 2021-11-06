import { Button, Container } from "@mui/material"
import { Box } from "@mui/system"
import { PageProps, navigate } from "gatsby"
import * as React from "react"
import { ReactCarousel } from "../components/carousel"

import Layout from "../components/layout"
import { RoomGallery } from "../components/roomGallery"
import Seo from "../components/seo"
import { home } from "../data/home"

const IndexPage: React.FC<PageProps> = props => (
  <Layout data={home.hero}>
    <Seo title="Home" />
    <ReactCarousel imgUrl={home.slider.imgUrl} />
    <Box sx={{ padding: "100px 0" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "835px",
            margin: "auto",
            padding: "120px 0",
          }}
        >
          <h3>Introducing six7house. A dream made true in Hout Bay.</h3>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate("/about")}
          >
            Discover More
          </Button>
        </Box>
        <RoomGallery {...props} />
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
