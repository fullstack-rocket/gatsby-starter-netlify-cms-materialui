import React from "react";
import kebabCase from "lodash/kebabCase";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MUILink from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <Box mx={2} my={5}>
      <Container>
        <Typography variant="h1">Tags</Typography>
        <List>
          {group.map(tag => (
            <ListItem key={tag.fieldValue}>
              <MUILink
                component={Link}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </MUILink>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
