import * as React from "react"
import { Link } from "gatsby"
import { Box, styled } from "@mui/system"
import AppLogo from "../../images/svg/logo.svg"

const Logo = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  textAlign: "center",
  padding: "24px",
})

const Header = () => {
  return (
    <Box sx={{ position: "absolute", left: 0, right: 0, top: 0 }}>
      <Logo>
        <Link to="/">
          <AppLogo />
        </Link>
      </Logo>
    </Box>
  )
}

export default Header
