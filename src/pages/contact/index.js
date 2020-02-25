import React from "react";
import { navigate } from "gatsby-link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Layout from "../../components/Layout";

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(1)}px auto`,
    maxWidth: 400,
    "& .MuiTextField-root": {
      display: "flex"
    }
  },
  textField: {}
}));

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState({});

  const handleChange = e => {
    console.log(e.target.id, e.target.value);
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...value
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Box mx={2} my={5}>
        <Container>
          <form
            className={classes.root}
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <Typography gutterBottom variant="h1">
              Contact
            </Typography>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <TextField
                id="bot-field"
                label="Don’t fill this out"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="name"
                className={classes.textField}
                label="Your name"
                onChange={handleChange}
                required
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="email"
                type="email"
                label="Email"
                onChange={handleChange}
                required
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="message"
                label="Message"
                onChange={handleChange}
                multiline
                required
                fullWidth
              />
            </div>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Send
            </Button>
          </form>
        </Container>
      </Box>
    </Layout>
  );
}
