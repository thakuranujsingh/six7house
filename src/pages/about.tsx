import { Button, Container } from "@mui/material"
import { Box, styled } from "@mui/system"
import { PageProps, navigate } from "gatsby"
import * as React from "react"
import { ReactCarousel } from "../components/carousel"

import Layout from "../components/layout"
import { RoomGallery } from "../components/roomGallery"
import Seo from "../components/seo"
import { home } from "../data/home"
import HeroImg from "../images/about-hero.jpg"

const PhoneIcon = styled(({ ...htmlProps }) => (
  <svg {...htmlProps} width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path
      d="M10.3125 3.75C8.77031 3.75 7.5 5.02031 7.5 6.5625V23.4375C7.5 24.9797 8.77031 26.25 10.3125 26.25H19.6875C21.2297 26.25 22.5 24.9797 22.5 23.4375V6.5625C22.5 5.02031 21.2297 3.75 19.6875 3.75H10.3125ZM10.3125 5.625H19.6875C20.2078 5.625 20.625 6.04219 20.625 6.5625V23.4375C20.625 23.9578 20.2078 24.375 19.6875 24.375H10.3125C9.79219 24.375 9.375 23.9578 9.375 23.4375V6.5625C9.375 6.04219 9.79219 5.625 10.3125 5.625ZM15 21.5625C14.4844 21.5625 14.0625 21.9844 14.0625 22.5C14.0625 23.0156 14.4844 23.4375 15 23.4375C15.5156 23.4375 15.9375 23.0156 15.9375 22.5C15.9375 21.9844 15.5156 21.5625 15 21.5625Z"
      fill="#848A7D"
    />
  </svg>
))({})
const ClockIcon = styled(({ ...htmlProps }) => (
  <svg {...htmlProps} width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path
      d="M27.6855 12.0703H20.1855C20.0566 12.0703 19.9512 12.1758 19.9512 12.3047V13.7109C19.9512 13.8398 20.0566 13.9453 20.1855 13.9453H27.6855C27.8145 13.9453 27.9199 13.8398 27.9199 13.7109V12.3047C27.9199 12.1758 27.8145 12.0703 27.6855 12.0703ZM23.7598 16.0547H20.1855C20.0566 16.0547 19.9512 16.1602 19.9512 16.2891V17.6953C19.9512 17.8242 20.0566 17.9297 20.1855 17.9297H23.7598C23.8887 17.9297 23.9941 17.8242 23.9941 17.6953V16.2891C23.9941 16.1602 23.8887 16.0547 23.7598 16.0547ZM13.9834 9.44824H12.7148C12.5332 9.44824 12.3867 9.59473 12.3867 9.77637V17.042C12.3867 17.1475 12.4365 17.2441 12.5215 17.3057L16.8838 20.4873C17.0303 20.5928 17.2354 20.5635 17.3408 20.417L18.0938 19.3887V19.3857C18.1992 19.2393 18.167 19.0342 18.0205 18.9287L14.3086 16.2451V9.77637C14.3115 9.59473 14.1621 9.44824 13.9834 9.44824Z"
      fill="#848A7D"
    />
    <path
      d="M23.5779 19.7432H21.8845C21.7205 19.7432 21.5652 19.8281 21.4773 19.9688C21.1052 20.5576 20.6717 21.1025 20.1736 21.6006C19.3152 22.459 18.3162 23.1328 17.2058 23.6016C16.0545 24.0879 14.8328 24.334 13.573 24.334C12.3103 24.334 11.0886 24.0879 9.94021 23.6016C8.82985 23.1328 7.83083 22.459 6.97243 21.6006C6.11403 20.7422 5.44021 19.7432 4.97146 18.6328C4.48513 17.4844 4.23903 16.2627 4.23903 15C4.23903 13.7373 4.48513 12.5186 4.97146 11.3672C5.44021 10.2568 6.11403 9.25782 6.97243 8.39942C7.83083 7.54102 8.82985 6.8672 9.94021 6.39845C11.0886 5.91212 12.3133 5.66602 13.573 5.66602C14.8357 5.66602 16.0574 5.91212 17.2058 6.39845C18.3162 6.8672 19.3152 7.54102 20.1736 8.39942C20.6717 8.89747 21.1052 9.44239 21.4773 10.0313C21.5652 10.1719 21.7205 10.2568 21.8845 10.2568H23.5779C23.7801 10.2568 23.909 10.0459 23.8181 9.8672C21.908 6.06739 18.0349 3.59766 13.7107 3.54786C7.37966 3.46876 2.12087 8.65138 2.10915 14.9766C2.09743 21.3135 7.23317 26.4551 13.5701 26.4551C17.95 26.4551 21.8875 23.9766 23.8181 20.1328C23.909 19.9541 23.7771 19.7432 23.5779 19.7432Z"
      fill="#848A7D"
    />
  </svg>
))({})

const DimondIcon = styled(({ ...htmlProps }) => (
  <svg {...htmlProps} width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path
      d="M22.7688 3.21429C22.8959 3.21419 23.0212 3.24424 23.1344 3.30198C23.2477 3.35972 23.3456 3.4435 23.4202 3.54644L23.478 3.63965L27.7713 11.6893L27.8173 11.7986L27.8291 11.8393L27.8473 11.9218L27.858 12.0161L27.8559 12.1232L27.858 12.0536C27.8583 12.1626 27.8365 12.2705 27.7938 12.3707L27.7616 12.435L27.7188 12.5057L27.663 12.5797L15.6427 26.4696C15.5399 26.6073 15.3945 26.7071 15.2291 26.7536L15.167 26.7686L15.063 26.7836L14.9998 26.7857L14.8927 26.7782L14.8005 26.7611L14.6902 26.7246L14.6623 26.7118C14.5632 26.6676 14.4748 26.6025 14.403 26.5211L2.32697 12.5636L2.26054 12.4704L2.20912 12.3707L2.17162 12.2636L2.14697 12.1243V11.9872L2.16304 11.8811L2.17376 11.8382L2.20912 11.7364L2.23912 11.6754L6.52483 3.63965C6.58456 3.52765 6.66998 3.43139 6.77408 3.35876C6.87819 3.28612 6.99802 3.23919 7.12376 3.22179L7.23197 3.21429H22.7677H22.7688ZM19.1859 12.8572H10.8127L15.002 23.7429L19.1859 12.8572ZM9.09304 12.8572H4.7034L12.603 21.9836L9.09197 12.8572H9.09304ZM25.2952 12.8572H20.9098L17.403 21.9761L25.2963 12.8572H25.2952ZM10.7409 4.82037H7.71412L4.28554 11.25H9.02554L10.7409 4.82037ZM17.598 4.82037H12.4038L10.6895 11.25H19.3113L17.597 4.82037H17.598ZM22.2866 4.82037H19.2598L20.9752 11.25H25.7141L22.2866 4.82037Z"
      fill="#848A7D"
    />
  </svg>
))({})

const AboutPage: React.FC<PageProps> = props => (
  <Layout
    data={{
      imgUrl: HeroImg,
      heading: "About Us",
      description:
        "If you have any questions regarding your stay, please do not hesitate to reach out to us. We are more than happy to answer your questions!",
    }}
  >
    <Seo title="About us" />
    <ReactCarousel sx={{ bgcolor: "#fff" }} imgUrl={home.slider.imgUrl} />
    <Box sx={{ padding: "130px 0", bgcolor: "#E0E2DF", textAlign: "center" }}>
      <Container sx={{ width: "520px" }}>
        <h6>six7house</h6>
        <h4>What we stand for</h4>
        <p>
          Each one of the 50 guestrooms and suites at the 11 Mirrors Design
          Hotel takes an inspiration from contemporary interior design with a
          profound understanding of worldwide trends and innovative concepts.
          Smart elegance without any heavy elements and imperial exaggerations
          sets up a creative environment that inspires and encourages genuine
          interaction, while the hotel’s staff provides a service of an
          exceptional quality.erial exaggerations sets up a creative environment
          that inspires and encourages genuine interaction, while the hotel’s
          staff provides a service of an exceptional quality.
        </p>
        <Box
          sx={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "space-between",
            margin: "0px -50px",
            h4: { color: "#848A7D", margin: "0" },
          }}
        >
          <span>
            <PhoneIcon sx={{ marginBottom: "20px" }} />
            <h4>Modern</h4>
          </span>
          <span>
            <ClockIcon sx={{ marginBottom: "20px" }} />
            <h4>Convinient</h4>
          </span>
          <span>
            <DimondIcon sx={{ marginBottom: "20px" }} />
            <h4>Premium</h4>
          </span>
        </Box>
      </Container>
    </Box>
    <Box sx={{ padding: "100px 0" }}>
      <Container maxWidth="lg">
        <RoomGallery {...props} />
      </Container>
    </Box>
  </Layout>
)

export default AboutPage
