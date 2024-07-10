import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Recipe } from "../../@types/Recipe";

const CardRecipe: React.FC<Recipe> = ({
  imageUrl,
  name,
  description,
  prepTime,
  cookTime,
  totalTime,
}) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card
        sx={{
          maxWidth: 400,
          minHeight: "520px",
          position: "relative",
        }}
      >
        <CardMedia component="img" alt="bean" height="255px" image={imageUrl} />
        <CardContent>
          <Box
            sx={{ position: "absolute", bottom: "10px", paddingRight: "10px" }}
          >
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            {prepTime && (
              <Typography variant="subtitle1">
                Preparing time: {prepTime}
              </Typography>
            )}
            {cookTime && <Typography>Cooking time: {cookTime}</Typography>}
            {totalTime && <Typography>Total time: {totalTime}</Typography>}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardRecipe;
