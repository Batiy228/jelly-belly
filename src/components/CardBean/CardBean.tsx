import React from "react";
import Card from "@mui/material/Card";
import {
  Box,
  // CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Bean } from "../../@types/Bean";
import { Link } from "react-router-dom";
const CardBean: React.FC<Bean> = ({
  beanId,
  imageUrl,
  flavorName,
  description,
  glutenFree,
  sugarFree,
  seasonal,
  kosher,
}) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Link to={`bean/${beanId}`}>
        <Card
          sx={{
            maxWidth: 400,
            minHeight: "520px",
            position: "relative",
            height: "100%",
          }}
        >
          <CardMedia
            sx={{
              height: 255,
              display: "block",
              maxWidth: 400,
              overflow: "hidden",
              width: "100%",
              objectFit: "contain",
            }}
            component="img"
            alt="bean"
            height="auto"
            image={imageUrl}
          />
          <CardContent>
            <Box
              sx={{
                position: "absolute",
                bottom: "10px",
                paddingRight: "10px",
              }}
            >
              <Typography component="h2" variant="h5">
                {flavorName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ marginTop: "1vw" }}>
                {glutenFree && <Chip label="Gluten Free" color="primary" />}
                {sugarFree && <Chip label="Sugar Free" color="primary" />}
                {seasonal && <Chip label="Seasonal" color="primary" />}
                {kosher && <Chip label="Kosher" color="primary" />}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default CardBean;
