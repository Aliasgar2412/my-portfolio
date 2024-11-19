import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { projectStyles } from "./ProjectStyles";
import Navbar from "../Header/Navbar";
import timeClockCalc from "../../images/time-clock-calculator-hero.webp";
import vectorAccordion from "../../images/vectorAccordion.jpg";
import zurico from "../../images/zurico.jpg";
import todolist from "../../images/todolist.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: theme.spacing(4),
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: "100%",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      gap: theme.spacing(2),
    },
  },
  card: {
    flexBasis: "calc(33.333% - 20px)",
    maxWidth: 345,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexBasis: "calc(50% - 20px)",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
  cardImage: {
    height: 140,
    objectFit: "cover",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#555",
  },
}));

export default function Project() {
  const classes = useStyles();
  const proClasses = projectStyles();

  const projectLinks = [
    {
      label: "Time Calculator",
      Id: "timecalc",
      image: timeClockCalc,
      description: "Calculate the difference of entered and exit time.",
      url: "https://gotimesa.netlify.app",
    },
    {
      label: "Accordion",
      Id: "accordion",
      image: vectorAccordion,
      description: "List of inputs and allowing to edit.",
      url: "https://assessment-omega-rouge.vercel.app/",
    },
    {
      label: "Zurico",
      Id: "zurico",
      image: zurico,
      description: "Shortcut code using Editor.",
      url: "https://editorshortcut.vercel.app/",
    },
    {
      label: "ToDoList",
      Id: "todolist",
      image: todolist,
      description: "A to do list.",
      url: "https://sdctodolist.vercel.app/",
    },
  ];

  function gotoProject(item) {
    window.open(item.url, "_blank");
  }

  return (
    <div id="project" className={classes.mainWrapper}>
      {/* <Navbar /> */}
      <Typography className={classes.title}>My Projects</Typography>
      <div className={classes.cardsWrapper}>
        {projectLinks.map((item, index) => (
          <Card className={`${classes.root} ${classes.card}`} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Projects Images Missing"
                className={classes.cardImage}
                image={item.image}
                title={item.label}
              />
              <CardContent>
                <Typography
                  className={classes.cardTitle}
                  variant="h5"
                  component="h2"
                >
                  {item.label}
                </Typography>
                <Typography
                  className={classes.cardDescription}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => gotoProject(item)}
              >
                Link
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
