import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyle";
import { Link } from "react-scroll";

export default function Navbar() {
  const classes = useStyles();

  const navlinks = [
    { label: "About", Id: "about" },
    { label: "Skills", Id: "skills" },
    { label: "Contact", Id: "contact" },
    { label: "Experience", Id: "experience" },
    { label: "Project", Id: "project" },
  ];

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>

        <Box className={classes.wraplink} style={{ marginLeft: "auto" }}>
          {" "}
          {navlinks.map((item, index) => (
            <Button key={index}>
              <Link
                to={item.Id}
                className={classes.navlinks}
                smooth={true}
                duration={500}
              >
                {item.label}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
