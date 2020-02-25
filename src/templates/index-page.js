import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const useStyles = makeStyles(theme => ({
  heroH1: {
    fontSize: "3rem",
    boxShadow: `rg${theme.palette.primary.main} 0.5rem 0px 0px, rg${theme.palette.primary.main} -0.5rem 0px 0px`,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    lineHeight: "1",
    padding: "0.25em"
  },
  heroH2: {
    fontSize: "2rem",
    boxShadow: `rg${theme.palette.primary.main} 0.5rem 0px 0px, rg${theme.palette.primary.main} -0.5rem 0px 0px`,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    lineHeight: "1",
    padding: "0.25em"
  },
  mainpitchTitle: {
    fontSize: "3rem"
  },
  mainpitchDesc: {
    fontSize: "1.2rem"
  }
}));

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => {
  const classes = useStyles();

  return (
    <div>
      <Box
        display="flex"
        height="400px"
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`
        }}
      >
        <Box
          display="flex"
          height="150px"
          justifyContent="space-around"
          flexDirection="column"
          alignItems="left"
        >
          <Typography variant="h1" mb={5} className={classes.heroH1}>
            {title}
          </Typography>
          <Typography variant="h2" className={classes.heroH2}>
            {subheading}
          </Typography>
        </Box>
      </Box>
      <Box mx={2} my={5}>
        <Container>
          <Typography
            variant="h1"
            className={classes.mainpitchTitle}
            gutterBottom
          >
            {mainpitch.title}
          </Typography>
          <Typography
            variant="h3"
            className={classes.mainpitchDesc}
            gutterBottom
          >
            {mainpitch.description}
          </Typography>
          <Typography variant="h3">{heading}</Typography>
          <p>{description}</p>
          <Features gridItems={intro.blurbs} />
          <Box textAlign="center" mt={5}>
            <Button
              color="primary"
              variant="outlined"
              component={Link}
              to="/products"
            >
              See all products
            </Button>
          </Box>
          <Typography variant="h3" gutterBottom>
            Latest stories
          </Typography>
          <BlogRoll />
          <Box textAlign="center" mt={5}>
            <Button
              color="primary"
              variant="outlined"
              component={Link}
              to="/blog"
            >
              Read more
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
