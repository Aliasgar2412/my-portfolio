import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    padding: "0",
    backgroundColor: "#f5f5f5",
  },
  section: {
    padding: theme.spacing(5),
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  responsiveImg: {
    width: "100%",
    maxWidth: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  sectionHeading: {
    fontSize: "3rem",
    fontWeight: 600,
    color: "#333",
    marginBottom: theme.spacing(2),
    textAlign: "left",
    fontFamily: "'Roboto', sans-serif",
  },
  sectionDesc: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    color: "#555",
    marginBottom: theme.spacing(3),
    fontFamily: "'Roboto', sans-serif",
  },
  subHeading: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#333",
    marginBottom: theme.spacing(1),
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
    marginBottom: theme.spacing(2),
    fontFamily: "'Roboto', sans-serif",
  },
  boldText: {
    fontWeight: "bold",
    color: "#333",
    fontSize: "1.2rem",
  },
  sectionDesc: {
    fontSize: "1.2rem",
    lineHeight: 1.6,
    marginBottom: theme.spacing(3),
  },
}));
