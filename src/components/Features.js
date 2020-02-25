import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <Container>
    <Grid container>
      {gridItems.map((item, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={6}>
          <Box px="3rem" py="1.5rem">
            <Box textAlign="center" m="auto" width="240px">
              <PreviewCompatibleImage imageInfo={item} />
            </Box>
            <p>{item.text}</p>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
