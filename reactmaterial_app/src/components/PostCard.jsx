import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import React from "react";

function PostCard({ post }) {
  return (
    <>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className="flex items-center">
            <div>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                  {" "}
                  {post.date}{" "}
                </Typography>
                <Typography variant="subtitle1"> {post.description}</Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue to read.....
                </Typography>
              </CardContent>
            </div>
            <Hidden smDown>
              <CardMedia
                sx={{width: 160, height: 180}}
                component="img"
                image={post.image}
                title={post.imageTitle}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
}

export default PostCard;
