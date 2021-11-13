import { Button, Container } from "@mui/material"
import { Box } from "@mui/system"
import { PageProps, navigate } from "gatsby"
import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroImg from "../../images/delux-room.jpg"
import { roomsData } from "../../data/roomsData"
import useMediaQuery from "@mui/material/useMediaQuery"

type RoomType = "premiers" | "junior" | "deluxe" | "senior"

const RoomsPage: React.FC<PageProps> = props => {
  const [activeTab, setActiveTab] = React.useState<RoomType>("premiers")
  const matches = useMediaQuery("(min-width:768px)")
  return (
    <Layout
      data={{
        imgUrl: HeroImg,
        heading: "Our Rooms",
        description: "Book this room now",
      }}
    >
      <Seo title="Our rooms" />

      <Box sx={{ padding: "60px 0 70px" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "310px 1fr",
              gridGap: "130px",
              alignItems: "self-start",
              justifyItems: "stretch",
              ul: {
                padding: "20px 0 0px",
                listStyle: "none",
                fontSize: "30px",
                borderRight: "1px solid #BBBBBB",
                margin: 0,
                li: {
                  marginBottom: "30px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#000",
                  },
                  "&.active": {
                    color: "#000",
                    fontWeight: 700,
                  },
                },
              },
            }}
          >
            <ul>
              {Object.keys(roomsData).map(item => (
                <li
                  onClick={() => setActiveTab(item as RoomType)}
                  className={item === activeTab ? "active" : ""}
                  key={item}
                >
                  {roomsData[item].name}
                </li>
              ))}
            </ul>
            <Box
              sx={{
                maxWidth: "641px",
              }}
            >
              {!matches && <h6>{roomsData[activeTab].name}</h6>}
              <img
                src={roomsData[activeTab].heroImg}
                alt={roomsData[activeTab].name}
              />
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridGap: 30,
                  justifyItems: "self-end",
                  paddingTop: "50px",
                  ".content p": {
                    marginBottom: "28px",
                  },
                }}
              >
                <article className="content">
                  <p>{roomsData[activeTab].description}</p>
                  <Button
                    onClick={() => navigate(roomsData[activeTab].pageUrl)}
                    color="primary"
                    variant="contained"
                  >
                    View More
                  </Button>
                  <Button
                    color="primary"
                    variant="outlined"
                    sx={{ marginLeft: "10px" }}
                  >
                    Book Now
                  </Button>
                </article>
                {matches && (
                  <article>
                    {roomsData[activeTab].roomDetail.map(
                      (item, key) => key <= 4 && <p key={`${key}`}>{item}</p>
                    )}
                  </article>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default RoomsPage
