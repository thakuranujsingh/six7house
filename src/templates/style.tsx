import { styled } from "@mui/system"

export const RoomInfo = styled("div")(theme => ({
  display: "grid",
  gridTemplateColumns: "0.6fr 40px 1fr",
  gridGap: "0 8%",
  alignItems: "center",
  justifyItems: "start",
  justifyContent: "center",
  ul: {
    gridRowStart: 1,
    gridColumnStart: 3,
    gridColumnEnd: 4,
    gridRowEnd: 5,
    paddingLeft: 0,
    listStyle: "none",
    columnCount: 2,
    columnGap: "15%",
    margin: 0,
    li: {
      marginBottom: "10px",
      display: "inline-block",
      width: "100%",
    },
  },
  "&:after": {
    content: `""`,
    gridRowStart: 1,
    gridRowEnd: 5,
    gridColumnStart: 2,
    background: "#BBBBBB",
    width: "1px",
    height: "100%",
  },
  button: {
    marginTop: "30px",
  },
}))
