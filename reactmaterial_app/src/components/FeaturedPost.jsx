import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function FeaturedPost() {
  return (
    <Card sx={{backgroundImage: "url(images/hero.jpg)" }} className="bg-no-repeat bg-center bg-cover">
      <CardContent>
        <Typography sx={{fontSize: 40, fontFamily: "Montserrat"}} gutterBottom >
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          odit consectetur, nihil veritatis est delectus ipsam dolores cumque
          saepe quam laborum eius rerum necessitatibus tempore enim illum et ea
          quisquam. Ex voluptatem laborum quam, perspiciatis veritatis dicta,
          architecto obcaecati possimus aliquam culpa alias iure odio voluptates
          dolorum reiciendis eum. Rerum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Read More...</Button>
      </CardActions>
    </Card>
  );
}

export default FeaturedPost;
