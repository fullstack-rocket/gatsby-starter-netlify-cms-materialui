import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Pricing = ({ data }) => (
  <Box mx={2} my={5}>
    <Grid container spacing={3}>
      {data.map(price => (
        <Grid item xs={12} sm={6} md={4} key={price.plan}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom align="center" variant="h4">
                  {price.plan}
                </Typography>
                <Typography gutterBottom align="center" variant="h1">
                  ${price.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                >
                  <p>{price.description}</p>
                  <ul>
                    {price.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default Pricing;
