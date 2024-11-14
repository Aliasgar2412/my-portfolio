import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: `${Theme.colors.base1} !important`,
    padding: theme.spacing(8, 0, 6, 0),
  },
  divider: {
    width: "65px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
  },
  responsiveImg: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  sectionHeading: {
    fontSize: "2rem",
    color: "#257180",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  sectionDesc: {
    fontSize: "1rem",
    color: "black",
    fontFamily: "Times New Roman",
    lineHeight: 0.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  headingDesc: {
    fontSize: "2rem",
    color: "#257180",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  educationDet: {
    fontSize: "1rem",
    color: "black",
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  ul: {
    paddingLeft: theme.spacing(4),
  },
  listItem: {
    fontSize: "1.2rem",
    marginBottom: theme.spacing(1),
  },
}));
