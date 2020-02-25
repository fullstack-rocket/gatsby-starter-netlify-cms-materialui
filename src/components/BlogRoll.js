import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MUILink from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";

import PreviewCompatibleImage from "./PreviewCompatibleImage";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140,
    overflow: "hidden",
    backgroundColor: grey[200]
  }
});

const BlogRoll = function(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        {posts &&
          posts.map(({ node: post, ...rest }, idx) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card>
                <CardMedia
                  className={classes.media}
                  title="Contemplative Reptile"
                >
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`
                      }}
                    />
                  ) : (
                    <div />
                  )}
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <MUILink component={Link} to={post.fields.slug}>
                      {post.frontmatter.title}
                    </MUILink>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.frontmatter.date}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {post.excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="primary"
                    variant="contained"
                    component={Link}
                    to={post.fields.slug}
                  >
                    Keep Reading
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
