import { PageProps } from "gatsby"
import * as React from "react"
import RoomDetail from "../../templates/roomDetail"

const JuniorRoom: React.FC<PageProps> = props => {
  return <RoomDetail {...props} roomName="junior" />
}

export default JuniorRoom
