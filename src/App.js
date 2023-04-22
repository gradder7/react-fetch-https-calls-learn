import { useEffect, useState } from "react";
import "./App.css";
import fetchPost from "./utils/fetchPost";
import { Card, CardContent, Grid, Typography,CircularProgress } from "@mui/material";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await fetchPost();
      setPosts(data.posts);
      setLoading(false)
    }
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "calc(100vh - 150px)" }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            List of Posts
          </Typography>
          {posts.map((post) => (
            <Card
              key={post.id}
              sx={{ my: 3 }}
              style={{ backgroundColor:"#faecd9"}}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.id}:- {"  "}
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </>
  );
}

export default App;
