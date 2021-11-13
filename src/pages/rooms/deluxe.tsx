import { PageProps } from "gatsby"
import * as React from "react"
import RoomDetail from "../../templates/roomDetail"

const DeluxeRoom: React.FC<PageProps> = props => {
  return <RoomDetail {...props} roomName="deluxe" />
}

export default DeluxeRoom
