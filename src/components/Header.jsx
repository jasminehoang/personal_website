import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Header = (props) => {
  const pathname = props.location.pathname;
  let header = "";

  switch(pathname) {
    case "/":
      header = "HUULLO"
      break;
    case "/about":
      header = "LEARN MORE ABOUT ME"
      break;
    case "/projects":
      header = "LOOK AT MY WORK"
      break;
  }

  return (
    <Typography variant="h6" noWrap>
      {header}
    </Typography>
  )
};

export default withRouter(Header);