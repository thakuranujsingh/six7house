import { PageProps } from "gatsby"
import * as React from "react"
import RoomDetail from "../../templates/roomDetail"

const PremierRoom: React.FC<PageProps> = props => {
  return (
    <RoomDetail {...props} roomName="premiers" />
  )
}

export default PremierRoom
