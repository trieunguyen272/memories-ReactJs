import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch(search));
      navigate(`/memories/search?searchQuery=${search}`);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          className={classes.gridContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item sm={6} md={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                onKeyPress={handleKeyPress}
                name="search"
                variant="outlined"
                label="Search Memories"
                size="small"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                size="small"
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
