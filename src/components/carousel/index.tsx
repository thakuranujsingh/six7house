import { Box } from "@mui/system"
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Container } from "@mui/material"

type data = {
  imgUrl: string[]
}
export const ReactCarousel: React.FC<data> = props => {
  return (
    <Box
      sx={{
        padding: "136px 0",
        bgcolor: "#E0E2DF",
        ".carousel.carousel-slider": {
          overflow: "visible",
          ".control-dots": {
            display: "flex",
            width: "100%",
            justifyContent: "stretch",
            gap: "12px",
            margin: 0,
            bottom: -34,
            li: {
              flex: 1,
              borderRadius: "0 !important",
              margin: "0 !important",
              height: "2px !important",
              boxShadow: "none !important",
              background: "#BBBBBB",
              opacity: "1 !important",
              "&.selected": {
                backgroundColor: "#464646",
              },
            },
          },
        },
      }}
    >
      <Container maxWidth="lg">
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
          showArrows={false}
          showStatus={false}
        >
          {props.imgUrl.map((url, i) => (
            <div>
              <img src={url} key={`slide-${i}`} alt="img" />
            </div>
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}
