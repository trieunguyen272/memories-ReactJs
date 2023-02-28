import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "50.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    display: "flex",
    height: "5px",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "425px",
    position: "relative",
    margin: "13px",
  },
  overlay: {
    position: "absolute",
    top: "25px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "5px",
    color: "white",
  },
  title: {
    margin: "0 10px",
    padding: "30px 0",
    display: "flex",
    fontSize: "18px",
    height: "20px",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "-10px 18px 0 18px",
  },
  name: {
    margin: "0 18px",
    padding: "0px 0",
    display: "flex",
    fontSize: "15px",
  },
  cardContent: {
    margin: "0 18px",
    padding: "5px 0",
    display: "flex",
  },
  cardActions: {
    padding: "5px 5px 8px 5px",
    display: "block",
    justifyContent: "space-between",
  },
  overlay3: {
    position: "absolute",
    bottom: "5px",
    left: "150px",
    color: "white",
  },
});
