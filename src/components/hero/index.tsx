import React from "react"
import { Container } from "@mui/material"
import { Box } from "@mui/system"

type Props = {
  heading: string
  description?: string
  imgUrl: string
  isHome?: boolean
  showBookingOptons?: boolean
}
export const HeroSection: React.FC<Props> = ({
  heading,
  description,
  imgUrl,
  isHome,
  showBookingOptons,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background: `url(${imgUrl})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: isHome ? "center" : "flex-end",
        padding: "84px 0",
        textAlign: isHome ? "center" : "left",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.22)",
        backgroundBlendMode: "color",
        "h1, h2": {
          color: "inherit",
        },
        "& p": {
          maxWidth: "530px",
        },
      }}
    >
      <Container
        maxWidth={isHome ? "md" : "lg"}
        sx={{ minHeight: isHome ? "" : "250px" }}
      >
        {isHome ? <h2>{heading}</h2> : <h1>{heading}</h1>}
        {description && <p>{description}</p>}
      </Container>
    </Box>
  )
}
