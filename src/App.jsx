// need for jsx 
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import { Toolbar, AppBar, IconButton, makeStyles, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

// css
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"   // responsive; screen size change
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    background: "pink",
    color: "white",
    boxShadow: theme.shadows[0]
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "gray",
    color: "white"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

const App = () => {

  const classes = useStyles();
  //const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Projects"];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="primary"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Header />
          </Toolbar>
        </AppBar>
        <Navbar
          classes={classes}
          open={open}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
