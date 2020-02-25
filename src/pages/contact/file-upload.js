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
    "& .MuiTextField-root": {
      margin: `${theme.spacing(1)}px auto`,
      display: "flex",
      maxWidth: 400
    }
  },
  textField: {
    maxWidth: "400px"
  },
  uploadField: {
    padding: "10px 0",
    "& input": {
      display: "none"
    }
  }
}));

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default function Contact(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = e => {
    setValue({ [e.target.name]: e.target.value });
  };

  const handleAttachment = e => {
    setValue({ [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
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
          <Typography variant="h1">File Upload</Typography>
          <form
            name="file-upload"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="file-upload" />
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
                fullWidth
                className={classes.textField}
                label="Your name"
                value={value}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.uploadField}>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleAttachment}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
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
