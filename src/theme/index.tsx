import React from "react"
import { ThemeProvider } from "@emotion/react"
import { GlobalCss } from "./defaultCss"
import { theme } from "./theme"

type Props = {}
export const MuiThemeProvider: React.FC<Props> = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalCss />
        {props.children}
      </ThemeProvider>
    </>
  )
}
