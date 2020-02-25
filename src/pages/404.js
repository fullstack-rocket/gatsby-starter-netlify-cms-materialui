import React from "react";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div>
      <Typography variant="h1">NOT FOUND</Typography>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
