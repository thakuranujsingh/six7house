import { Button, Container } from "@mui/material"
import { Box } from "@mui/system"
import { PageProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { roomsData } from "../data/roomsData"
import { ReactCarousel } from "../components/carousel"
import { RoomGallery } from "../components/roomGallery"
import { RoomInfo } from "./style"

type RoomData = PageProps & {
  roomName: "premiers" | "junior" | "deluxe" | "senior"
}

const RoomDetail: React.FC<RoomData> = props => {
  console.log(props)
  const key = props.roomName
  const data = roomsData[key]
  return (
    <Layout
      data={{
        imgUrl: data.heroImg,
        heading: data.name,
        description: "Book this room now",
      }}
    >
      <Seo title="Our rooms" />
      <Box sx={{ padding: "130px 0 130px" }}>
        <Container maxWidth="lg">
          <RoomInfo>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <Button variant="outlined" color="primary">
              Book Now
            </Button>

            <ul>
              {data.roomDetail.map((item, i) => (
                <li key={`index-${i}`}>{item}</li>
              ))}
            </ul>
          </RoomInfo>
        </Container>
      </Box>

      <ReactCarousel
        sx={{ background: "transparent", padding: "0px 0px 160px" }}
        imgUrl={data.slider.imgUrl}
      />
      <Box sx={{ img: { width: "100%", height: "auto" } }}>
        <img src={data.roomDiagram} alt={data.name} />
      </Box>
      <Box sx={{ padding: "100px 0" }}>
        <Container maxWidth="lg">
          <RoomGallery {...props} />
        </Container>
      </Box>
    </Layout>
  )
}

export default RoomDetail
