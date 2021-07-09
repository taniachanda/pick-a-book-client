import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import Sidebar from './../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    // marginBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // color: "#61045f",
    color: "#f082ff",
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  //Login function
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.clear();
    history.go(0);
  };
  const name = JSON.parse(localStorage.getItem("name"));
  const email = JSON.parse(localStorage.getItem("email"));
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar
          style={{
            background: "black",
            position: "sticky",
            top: "0",
            bottom: "0",
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              component="p"
              // color="secondary"
              className={classes.title}
            >
              Pick-a-Book
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  color="secondary"
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  KeepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/"
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/orderedBook"
                  >
                    <ListItemIcon>
                      <ListAltIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Orders </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/addBooks"
                  >
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Admin</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="#"
                  >
                    <ListItemIcon>
                      <LibraryAddCheckIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Deal </Typography>
                  </MenuItem>
                  <MenuItem
                    eventkey={2}
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/signIn"
                  >
                    {" "}
                    {email && <Typography>{name}</Typography>}
                    {email && (
                      <>
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        <Typography variant="h6" onClick={handleSignOut}>
                          {" "}
                          Sign Out{" "}
                        </Typography>{" "}
                      </>
                    )}
                    {!email && (
                      <>
                        <ListItemIcon>
                          <AccountBoxIcon />
                        </ListItemIcon>
                        <Typography variant="h6" component={Link} to="/signIn">
                          {" "}
                          Sign in{" "}
                        </Typography>
                      </>
                    )}
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button
                  variant="text"
                  component={Link}
                  to="/home"
                  color="secondary"
                >
                  <HomeIcon />
                  Home
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/orderedBook"
                  color="secondary"
                >
                  <ListAltIcon />
                  Orders
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/addBooks"
                  color="secondary"
                >
                  <PersonIcon />
                  Admin
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="#"
                  color="secondary"
                >
                  <LibraryAddCheckIcon />
                  Deal
                </Button>
                <Button eventkey={2}>
                  {email && <Button color="primary">{name}</Button>}
                  {email && (
                    <Button
                      // className="b-btn"
                      component={Link}
                      to="/orderedBook"
                      onClick={handleSignOut}
                      variant="contained"
                      color="primary"
                    >
                      <ExitToAppIcon />
                      Sign Out
                    </Button>
                  )}
                  {!email && (
                    <Button
                      component={Link}
                      to="/signIn"
                      variant="contained"
                      color="primary"
                    >
                      {" "}
                      <AccountBoxIcon />
                      Sign in
                    </Button>
                  )}
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
