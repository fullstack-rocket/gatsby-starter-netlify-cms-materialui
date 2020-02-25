import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Box mx={2} my={5}>
      <Container>
        <Typography variant="h1">Thank you!</Typography>
        <p>This is a custom thank you page for form submissions</p>
      </Container>
    </Box>
  </Layout>
);
