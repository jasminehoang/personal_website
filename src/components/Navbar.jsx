import React from 'react';
// handle switching between links; speed up rendering between pages
import { Link, withRouter } from 'react-router-dom';
import { MenuList, MenuItem, ListItemIcon, Hidden, Drawer } from '@material-ui/core';

import MailIcon from "@material-ui/icons/Mail"


const Navbar = (props) => {
  const { classes, open, handleDrawerToggle } = props;

  const bar = (
    <MenuList>
      <MenuItem component={Link} to={{ pathname: "/", state: { classes: classes } }}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        Home
            </MenuItem>
      <MenuItem component={Link} to={{ pathname: "/about", state: { classes: classes } }}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        About
            </MenuItem>
      <MenuItem component={Link} to={{ pathname: "/projects", state: { classes: classes } }}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        Projects
            </MenuItem>
    </MenuList>
  )

  console.log(classes);
  return (
    <nav className={classes.drawer}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // jimmy told me to
          }}
        >
          {bar}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {bar}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default withRouter(Navbar);