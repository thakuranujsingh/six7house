import { Box } from "@mui/system"
import React from "react"
import { navigate, PageProps } from "gatsby"

interface RoomThumbnailProps extends PageProps {
  imgUrl: string
  heading: string
  description: string
  link: string
}
export const RoomThumbnail: React.FC<RoomThumbnailProps> = ({
  description,
  heading,
  imgUrl,
  link,
}) => {
  return (
    <Box
      onClick={() => navigate(link)}
      sx={{
        position: "relative",
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        overflow: "hidden",
        height: "350px",
        "&:hover > div": {
          paddingTop: "50px",
          "& p": {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          color: "#fff",
          background: "rgba(0, 0, 0, 0.22)",
          padding: "50% 50px 50px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s",
          h3: {
            color: "inherit",
          },
          "& p": {
            opacity: 0,
            margin: 0,
            transition: "all .3s",
            maxWidth: "314px",
          },
        }}
      >
        <h3>{heading}</h3>
        <p>{description}</p>
      </Box>
    </Box>
  )
}
