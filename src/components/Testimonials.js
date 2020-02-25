import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import Box from "@material-ui/core/Box";

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <Box
        component="blockquote"
        borderLeft={4}
        borderColor="primary.main"
        bgcolor="primary.50"
        key={v4()}
        p={2}
      >
        <p>{testimonial.quote}</p>
        <footer> – {testimonial.author}</footer>
      </Box>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default Testimonials;
