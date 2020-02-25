import React from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import MUILink from "@material-ui/core/Link";

import logo from "../img/logo.svg";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    color: theme.palette.primary.dark,
    backgroundColor: "white",
    [theme.breakpoints.up("sm")]: {
      width: `100%`
    }
  },
  mainToolbar: {
    "& a": {
      color: theme.palette.primary.dark,
      "&:hover": {
        textDecoration: "none"
      }
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between"
    }
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const items = [
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
  { path: "/contact/examples", label: "Form Examples" }
];

export default function NavBarComponent(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {items.map(item => (
          <ListItem button key={item.path}>
            <MUILink component={Link} to={item.path}>
              <ListItemText primary={item.label} />
            </MUILink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.mainToolbar}>
          <Link to="/">
            <img
              src={logo}
              alt="Kaldi"
              style={{ width: "88px", marginRight: "20px" }}
            />
          </Link>
          <Hidden smDown implementation="css">
            {items.map(item => (
              <Button color="inherit" key={item.path}>
                <MUILink component={Link} to={item.path}>
                  <ListItemText primary={item.label} />
                </MUILink>
              </Button>
            ))}
          </Hidden>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}
