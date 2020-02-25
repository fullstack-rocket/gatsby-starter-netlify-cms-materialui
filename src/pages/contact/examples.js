import React from "react";
import Link from "gatsby-link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Layout from "../../components/Layout";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Box mx={2} my={5}>
          <Container>
            <Typography variant="h1">Hi people</Typography>
            <p>
              This is an example site integrating Netlify’s form handling with
              Gatsby
            </p>
            <ul>
              <li>
                <Link to="/contact">Basic contact form</Link>
              </li>
              <li>
                <Link to="/contact/file-upload/">Form with file upload</Link>
              </li>
            </ul>

            <Typography variant="h2">Troubleshooting</Typography>
            <Typography variant="h3">
              Forms stop working after upgrading to Gatsby v2
            </Typography>
            <p>
              This can be caused by the offline-plugin.{" "}
              <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">
                Workaround
              </a>{" "}
              is to use <code>?no-cache=1</code> in the POST url to prevent the
              service worker from handling form submissions
            </p>
            <Typography variant="h3">Adding reCAPTCHA</Typography>
            <p>
              If you are planning to add reCAPTCHA please go to{" "}
              <a href="https://github.com/imorente/gatsby-netlify-form-example">
                imorente/gatsby-netlify-form-example
              </a>{" "}
              for a working example.
            </p>
          </Container>
        </Box>
      </Layout>
    );
  }
}
