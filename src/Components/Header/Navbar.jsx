import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./HeaderStyle";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const navlinks = [
    { label: "About", Id: "about" },
    { label: "Experience", Id: "experience" },
    { label: "Skills", Id: "skills" },
    { label: "Project", Id: "project" },
    { label: "Contact", Id: "contact" },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          variant="persistent"
          anchor="left"
          className={classes.drawer}
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <List>
              {navlinks.map((item, index) => (
                <ListItem button key={item.label}>
                  <ListItemText>
                    <Link
                      to={item.Id}
                      // className={classes.navlinks}
                      smooth={true}
                      duration={500}
                      onClick={() => handleDrawerClose()}
                    >
                      {item.label}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        {!isMobile && (
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
        )}
      </Toolbar>
    </AppBar>
  );
}
