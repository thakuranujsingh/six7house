import * as React from "react"
import { Box } from "@mui/system"
import { Container, Divider, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"
import { Link } from "gatsby"

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
          <Link to="/">Follow us!</Link>
        </Box>
      </Container>
    </Box>
  )
}
