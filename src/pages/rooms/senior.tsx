import { PageProps } from "gatsby"
import * as React from "react"
import RoomDetail from "../../templates/roomDetail"

const SeniorRoom: React.FC<PageProps> = props => {
  return <RoomDetail {...props} roomName="senior" />
}

export default SeniorRoom
