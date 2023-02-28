import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="div"
        image={post.image}
      ></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
      </div>

      {(user?.result?.googleId === post?.creator ||
        user?.result?.name === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post.id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      )}

      <Typography
        className={classes.details}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.name}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === post?.creator ||
          user?.result?.name === post?.creator) && (
          <div className={classes.overlay3}>
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deletePost(post.id))}
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          </div>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
