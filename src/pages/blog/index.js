import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography
            variant="h1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem"
            }}
          >
            Latest Stories
          </Typography>
        </div>
        <Box mx={2} my={5}>
          <BlogRoll />
        </Box>
      </Layout>
    );
  }
}
