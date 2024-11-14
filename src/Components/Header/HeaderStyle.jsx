import { makeStyles } from "@material-ui/core/styles";
import Image from "../../images/cropBG.jpg";

export const useStyles = makeStyles((theme) => ({
  HeaderWrapper: {
    height: "100vh",
    width:'100%',
    background: `linear-gradient(to bottom right,#04303140,#00606473),url(${Image})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: "#fff",
    textAlign: "center",
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover'
  },
  HeaderContainer: {
    zIndex: 1,
    padding: theme.spacing(4),
    maxWidth: "800px",
    width: "100%",
  },
  headerHello: {
    fontSize: "1.5rem",
    fontWeight: 300,
    marginBottom: theme.spacing(1),
    fontFamily: "'Roboto', sans-serif",
  },
  headerTitle: {
    fontSize: "4rem",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    fontFamily: "'Roboto', sans-serif",
    textTransform: "uppercase",
  },
  headerDesc: {
    fontSize: "1.8rem",
    fontWeight: 500,
    marginBottom: theme.spacing(1),
    fontFamily: "'Roboto', sans-serif",
  },
  headerDescTwo: {
    fontSize: "1.4rem",
    fontWeight: 400,
    marginBottom: theme.spacing(3),
    fontFamily: "'Roboto', sans-serif",
  },
  buttonDesc: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: theme.spacing(1.2, 4),
    backgroundColor: "#fff",
    color: "#8e24aa",
    borderRadius: "50px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#8e24aa",
      color: "#fff",
      transform: "scale(1.05)",
    },
  },

  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: theme.spacing(3),
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  modalBody: {
    fontSize: "1rem",
    marginBottom: theme.spacing(2),
  },
  modalButton: {
    backgroundColor: "#8e24aa",
    color: "#fff",
    borderRadius: "25px",
    padding: theme.spacing(1, 3),
    "&:hover": {
      backgroundColor: "#6a1b9a",
    },
  },
  navbar: {
    backgroundColor: "#333 !important",
    zIndex: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  wraplink: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  navlinks: {
    color: "#fff",
    textDecoration: "none",
    margin: theme.spacing(0, 2),
    fontWeight: 600,
    "&:hover": {
      color: "#8e24aa",
    },
  },
}));
