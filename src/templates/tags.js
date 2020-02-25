import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MUILink from "@material-ui/core/Link";

import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <Box mx={2} my={5}>
          <Container>
            <Typography variant="h1">{tagHeader}</Typography>
            <List>
              {posts.map(post => (
                <ListItem key={post.node.fields.slug}>
                  <MUILink component={Link} to={post.node.fields.slug}>
                    <Typography variant="h4">
                      {post.node.frontmatter.title}
                    </Typography>
                  </MUILink>
                </ListItem>
              ))}
            </List>
            <p>
              <MUILink component={Link} to="/tags/">
                Browse all tags
              </MUILink>
            </p>
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
