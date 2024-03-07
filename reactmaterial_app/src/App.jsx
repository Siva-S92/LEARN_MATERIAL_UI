import { useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FeaturedPost from "./components/FeaturedPost";
import { featuredPosts, sidebar } from "./data/data";
import PostCard from "./components/PostCard";
import { Grid } from "@mui/material";
import Main from "./components/Main";
import Side_Bar from "./components/Side_Bar";



function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container spacing={4}>
            {featuredPosts.map((post, index) => (
              <PostCard key={post.title} post={post} />
            ))}
          </Grid>

          <Grid container spacing={5}>
              <Main title="From the Firehose"/>
              <Side_Bar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}

              />

        </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
