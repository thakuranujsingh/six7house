import { Button, Container } from "@mui/material"
import { Box, styled, textAlign } from "@mui/system"
import { PageProps, navigate } from "gatsby"
import * as React from "react"
import { ReactCarousel } from "../components/carousel"

import Layout from "../components/layout"
import { RoomGallery } from "../components/roomGallery"
import Seo from "../components/seo"
import { home } from "../data/home"
import HeroImg from "../images/delux-room.jpg"

const LocationIcon = styled(({ ...htmlProps }) => (
  <svg {...htmlProps} width="57" height="57" viewBox="0 0 57 57" fill="none">
    <path
      d="M32.6022 16.0312C31.9685 16.0313 31.3413 16.1584 30.7575 16.405C30.1738 16.6516 29.6454 17.0127 29.2036 17.4669L28.5035 18.1883L27.7964 17.4669C27.3545 17.0128 26.8261 16.6518 26.2424 16.4053C25.6586 16.1588 25.0314 16.0318 24.3977 16.0318C23.7641 16.0318 23.1369 16.1588 22.5531 16.4053C21.9694 16.6518 21.441 17.0128 20.9991 17.4669C20.0981 18.3973 19.5942 19.6416 19.5942 20.9368C19.5942 22.232 20.0981 23.4763 20.9991 24.4067L28.5035 32.0625L36.0008 24.4067C36.9019 23.4763 37.4057 22.232 37.4057 20.9368C37.4057 19.6416 36.9019 18.3973 36.0008 17.4669C35.559 17.0127 35.0306 16.6516 34.4469 16.405C33.8631 16.1584 33.2359 16.0313 32.6022 16.0312Z"
      fill="#848A7D"
    />
    <path
      d="M28.5 53.4375L13.4734 35.7158C13.2646 35.4497 13.058 35.182 12.8535 34.9125C10.2867 31.5313 8.90005 27.4014 8.90627 23.1562C8.90627 17.9597 10.9706 12.9759 14.6451 9.30138C18.3197 5.62684 23.3034 3.5625 28.5 3.5625C33.6966 3.5625 38.6804 5.62684 42.3549 9.30138C46.0294 12.9759 48.0938 17.9597 48.0938 23.1562C48.1 27.3994 46.714 31.5275 44.1483 34.9072L44.1465 34.9125C44.1465 34.9125 43.6121 35.6143 43.532 35.7087L28.5 53.4375ZM15.6964 32.7661C15.7 32.7661 16.1132 33.3147 16.2076 33.4323L28.5 47.9299L40.8085 33.4127C40.8868 33.3147 41.3036 32.7625 41.3054 32.7607C43.4022 29.9982 44.5354 26.6244 44.5313 23.1562C44.5313 18.9045 42.8423 14.8269 39.8358 11.8204C36.8294 8.814 32.7518 7.125 28.5 7.125C24.2483 7.125 20.1707 8.814 17.1642 11.8204C14.1578 14.8269 12.4688 18.9045 12.4688 23.1562C12.465 26.6266 13.5995 30.0023 15.6982 32.7661H15.6964Z"
      fill="#848A7D"
    />
  </svg>
))({})

const ContactPage: React.FC<PageProps> = props => (
  <Layout
    data={{
      imgUrl: HeroImg,
      heading: "Contact Us",
      description:
        "If you have any questions regarding your stay, please do not hesitate to reach out to us. We are more than happy to answer your questions!",
    }}
  >
    <Seo title="About us" />
    <Box sx={{ padding: "130px 0", bgcolor: "#E0E2DF" }}>
      <Container>
        <h3>How can we help you?</h3>
        <p>
          Sent us a message and we will get back to you as quickly as possible!
        </p>
      </Container>
    </Box>
    <Box sx={{ padding: "250px 0", textAlign: "center", "@media only screen and (max-width: 767px)": {padding: "170px 0"}  }}>
      <Container maxWidth="lg">
        <LocationIcon sx={{ marginBottom: "30px" }} />
        <h4>
          12 King St, Scott Estate
          <br />
          Cape Town, 7806
          <br />
          South Africa
        </h4>
      </Container>
    </Box>
    <Box sx={{ padding: "130px 0", bgcolor: "#E0E2DF" }}>
      <Container maxWidth="lg">
        <h4> Map</h4>
      </Container>
    </Box>
  </Layout>
)

export default ContactPage
