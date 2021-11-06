import { Box, styled } from "@mui/system"
import { PageProps, navigate } from "gatsby"
import React from "react"
import { RoomThumbnail } from "./roomThumbnail"
import { roomsData } from "../../data/roomsData"
import { Button } from "@mui/material"
import { keyframes } from "@mui/system"

const Icon = styled(({ ...htmlProps }) => (
  <svg {...htmlProps} width="57" height="57" viewBox="0 0 57 57" fill="none">
    <path
      className="path2"
      d="M7.125 35.625C13.0221 35.625 17.4444 28.5 17.4444 28.5C17.4444 28.5 21.8666 35.625 27.7637 35.625C33.6585 35.625 39.5556 28.5 39.5556 28.5C39.5556 28.5 45.4528 35.625 49.875 35.625"
      stroke="#848A7D"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      className="path1"
      d="M7.125 47.5C13.0221 47.5 17.4444 40.375 17.4444 40.375C17.4444 40.375 21.8666 47.5 27.7637 47.5C33.6585 47.5 39.5556 40.375 39.5556 40.375C39.5556 40.375 45.4528 47.5 49.875 47.5"
      stroke="#848A7D"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.125 23.75C45.125 21.5668 44.695 19.4049 43.8595 17.3879C43.024 15.3709 41.7994 13.5381 40.2556 11.9943C38.7119 10.4506 36.8792 9.22599 34.8621 8.3905C32.8451 7.55502 30.6832 7.125 28.5 7.125C26.3168 7.125 24.1549 7.55502 22.1379 8.3905C20.1208 9.22599 18.2881 10.4506 16.7443 11.9943C15.2006 13.5381 13.976 15.3709 13.1405 17.3879C12.305 19.4049 11.875 21.5668 11.875 23.75"
      stroke="#848A7D"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
))({
  marginBottom: "30px",
})
export const RoomGallery: React.FC<PageProps> = props => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "24px",
          padding: "100px 0",
        }}
      >
        {Object.keys(roomsData).map((key, index) => (
          <RoomThumbnail
            {...props}
            key={key}
            heading={roomsData[key].shorName}
            imgUrl={roomsData[key].heroImg}
            link={roomsData[key].pageUrl}
            description={roomsData[key].description}
          />
        ))}
      </Box>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "835px",
          margin: "auto",
          padding: "100px 0",
        }}
      >
        <Icon />
        <h3>
          Soulful Bohemian style featuring sleek and modern design full of South
          African magic light
        </h3>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigate("/rooms")}
        >
          See all rooms
        </Button>
      </Box>
    </>
  )
}
