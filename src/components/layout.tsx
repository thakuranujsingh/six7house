/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import Header from "./header/header"
import { MuiThemeProvider } from "../theme"
import { HeroSection } from "./hero"
import { Footer } from "./footer/footer"

type Props = {
  data?: {
    heading: string
    description?: string
    imgUrl: string
    isHome?: boolean
    showBookingOptons?: boolean
  }
}
const Layout: React.FC<Props> = ({ children, data }) => {
  return (
    <MuiThemeProvider>
      <Header />
      <HeroSection {...data} />
      <main>{children}</main>
      <Footer />
    </MuiThemeProvider>
  )
}

export default Layout
