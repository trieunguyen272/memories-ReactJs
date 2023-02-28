import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p.id === currentId) : null
  );
  const [postData, setPostData] = useState({
    name: "",
    image: "",
    title: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, creator: user?.result?.name })
      );
      clear();
    } else {
      dispatch(createPost({ ...postData, creator: user?.result?.name }));
      console.log("post", { ...postData });
      clear();
    }
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({
      name: "",
      image: "",
      title: "",
    });
  };

  if (localStorage.getItem("profile") === null) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          <Typography variant="h6">
            {currentId ? `Editing ` : "Creating "}a Memory
          </Typography>
        </Typography>

        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          multiline
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            required
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({
                ...postData,
                image: base64,
              })
            }
          />
        </div>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          multiline
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
