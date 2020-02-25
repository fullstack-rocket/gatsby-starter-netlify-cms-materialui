import React from "react";
import { Link } from "gatsby";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MUILink from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const useStyles = makeStyles(theme => ({
  logo: {
    textAlign: "center"
  },
  footer: {
    backgroundColor: theme.footer.backgroundColor,
    "& a": {
      color: "white"
    }
  },
  roundedIcon: {
    display: "inline-flex!important",
    borderRadius: "50%!important",
    padding: ".5rem!important",
    margin: ".5rem!important",
    backgroundColor: "white",
    "& img": {
      width: "1em",
      height: "1em"
    }
  }
}));

const Footer = function() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} alt="Kaldi" style={{ width: "14em", height: "10em" }} />
      </div>
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <List component="ul">
                <ListItem>
                  <MUILink component={Link} to="/">
                    Home
                  </MUILink>
                </ListItem>
                <ListItem>
                  <MUILink component={Link} to="/about">
                    About
                  </MUILink>
                </ListItem>
                <ListItem>
                  <MUILink component={Link} to="/products">
                    Products
                  </MUILink>
                </ListItem>
                <ListItem>
                  <MUILink component={Link} to="/contact/examples">
                    Form Examples
                  </MUILink>
                </ListItem>
                <ListItem>
                  <MUILink
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin
                  </MUILink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List>
                <ListItem>
                  <MUILink component={Link} to="/blog">
                    Latest Stories
                  </MUILink>
                </ListItem>
                <ListItem>
                  <MUILink component={Link} to="/contact">
                    Contact
                  </MUILink>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={4}>
              <a
                title="facebook"
                href="https://facebook.com"
                className={classes.roundedIcon}
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                title="twitter"
                href="https://twitter.com"
                className={classes.roundedIcon}
              >
                <img src={twitter} alt="Twitter" />
              </a>
              <a
                title="instagram"
                href="https://instagram.com"
                className={classes.roundedIcon}
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                title="vimeo"
                href="https://vimeo.com"
                className={classes.roundedIcon}
              >
                <img src={vimeo} alt="Vimeo" />
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
