import * as React from "react"
import { Box, styled } from "@mui/system"
import { Container, Divider, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"
import { Link } from "gatsby"
import { NewsLetterForm } from "../forms/newsLetterForm"


const InstaIcon = styled(({...htmlProps}) => (
  <svg {...htmlProps} width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.0001 7.1931C9.33996 7.1931 7.19308 9.33998 7.19308 12.0001C7.19308 14.6603 9.33996 16.8072 12.0001 16.8072C14.6603 16.8072 16.8071 14.6603 16.8071 12.0001C16.8071 9.33998 14.6603 7.1931 12.0001 7.1931ZM12.0001 15.1244C10.2798 15.1244 8.87589 13.7204 8.87589 12.0001C8.87589 10.2798 10.2798 8.87592 12.0001 8.87592C13.7204 8.87592 15.1243 10.2798 15.1243 12.0001C15.1243 13.7204 13.7204 15.1244 12.0001 15.1244ZM17.004 5.87592C16.3829 5.87592 15.8814 6.37748 15.8814 6.99857C15.8814 7.61967 16.3829 8.12123 17.004 8.12123C17.6251 8.12123 18.1267 7.62201 18.1267 6.99857C18.1243 6.37514 17.6251 5.87592 17.004 5.87592ZM21.3704 12.0001C21.3704 10.7064 21.3821 9.42435 21.3095 8.13295C21.2368 6.63295 20.8946 5.3017 19.7978 4.20482C18.6986 3.1056 17.3696 2.76576 15.8696 2.6931C14.5759 2.62045 13.2939 2.63217 12.0025 2.63217C10.7087 2.63217 9.42667 2.62045 8.13527 2.6931C6.63527 2.76576 5.30402 3.10795 4.20714 4.20482C3.10792 5.30404 2.76808 6.63295 2.69542 8.13295C2.62277 9.4267 2.63449 10.7087 2.63449 12.0001C2.63449 13.2915 2.62277 14.5759 2.69542 15.8673C2.76808 17.3673 3.11027 18.6986 4.20714 19.7954C5.30636 20.8947 6.63527 21.2345 8.13527 21.3072C9.42902 21.3798 10.711 21.3681 12.0025 21.3681C13.2962 21.3681 14.5782 21.3798 15.8696 21.3072C17.3696 21.2345 18.7009 20.8923 19.7978 19.7954C20.897 18.6962 21.2368 17.3673 21.3095 15.8673C21.3845 14.5759 21.3704 13.2939 21.3704 12.0001ZM19.3079 17.5267C19.1368 17.9533 18.9306 18.272 18.6001 18.6001C18.2696 18.9306 17.9532 19.1369 17.5267 19.3079C16.2939 19.7978 13.3665 19.6876 12.0001 19.6876C10.6337 19.6876 7.70402 19.7978 6.47121 19.3103C6.04464 19.1392 5.72589 18.9329 5.39777 18.6025C5.0673 18.272 4.86105 17.9556 4.68996 17.529C4.20246 16.2939 4.31261 13.3665 4.31261 12.0001C4.31261 10.6337 4.20246 7.70404 4.68996 6.47123C4.86105 6.04467 5.0673 5.72592 5.39777 5.39779C5.72824 5.06967 6.04464 4.86107 6.47121 4.68998C7.70402 4.20248 10.6337 4.31264 12.0001 4.31264C13.3665 4.31264 16.2962 4.20248 17.529 4.68998C17.9556 4.86107 18.2743 5.06732 18.6025 5.39779C18.9329 5.72826 19.1392 6.04467 19.3103 6.47123C19.7978 7.70404 19.6876 10.6337 19.6876 12.0001C19.6876 13.3665 19.7978 16.2939 19.3079 17.5267Z" fill="white"/>
</svg>

))({
  marginRight: "10px"
})
export const Footer: React.FC = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        padding: "130px 0 0",
        bgcolor: theme.palette.primary.main,
        color: "#fff",
        overflow: "hidden",
        h3: { color: "inherit" },
      }}
    >
      <Container maxWidth="lg">
        <h3>Stay up to date!</h3>
        <p>
          Get our emails. Letters from our five stars hotel, news about
          <br /> Ibiza, offers, and much more. Not too often — Just enough.
        </p>
        <NewsLetterForm />
        <Divider sx={{ margin: "0 -100px", borderColor: "#B4B4B4" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "41px 0",
            a: {
              color: "#fff",
            },
            ul: {
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              alignItems: "center",

              li: {
                marginRight: "50px",
                position: "relative",
                color: "#EDEDEC",
                "&:not(:first-of-type):before": {
                  content: '""',
                  width: "4px",
                  height: "4px",
                  position: "absolute",
                  left: -25,
                  background: "#fff",
                  top: 0,
                  bottom: 0,
                  margin: "auto",
                },
              },
            },
          }}
        >
          <ul>
            <li>© 2021 six7house, Inc. </li>
            <li>
              <Link to="/">Privacy</Link>{" "}
            </li>
            <li>
              <Link to="/">Terms</Link>{" "}
            </li>
            <li>
              <Link to="/">Sitemap</Link>{" "}
            </li>
            <li>
              <Link to="/">Company details</Link>{" "}
            </li>
          </ul>
          <Link to="/"><InstaIcon /> Follow us!</Link>
        </Box>
      </Container>
    </Box>
  )
}
