import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { posts } from "../data/data";
import Markdown from "markdown-to-jsx";

function Main({ title}) {
  return (
    <>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map((post,index) => (
          <Markdown key={index}>{post.body}</Markdown>
        ))}
      </Grid>
    </>
  );
}

export default Main;
