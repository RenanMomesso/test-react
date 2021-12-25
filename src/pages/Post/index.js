import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./post.css";
import axios from "axios";

const Post = () => {
  const history = useHistory();

  const postId = history.location.pathname.split("/")[1];
  const allPosts = history.location.state;

  console.log(allPosts);

  const getAllPostsPlus3 = () => {
    let threePosts = [];
    for (let i = 0; i < allPosts.length; i++) {
      if (allPosts[i].id == postId) {
        threePosts.push(allPosts[i + 1]);
        threePosts.push(allPosts[i + 2]);
        threePosts.push(allPosts[i + 3]);
      }
    }
    setPostsReadMore(threePosts);
  };

  const [dataPost, setDataPost] = useState("");
  const [postsReadMore, setPostsReadMore] = useState([]);

  const getPostByUrl = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setDataPost(data);
    getAllPostsPlus3();
  };

  useEffect(() => {
    getPostByUrl();
  }, [history.location.pathname]);

  return (
    <div style={{ width: 1200, margin: "auto" }} className="main-post">
      <button onClick={() => history.push("/")}>HOME</button>
      <div>
        <h4 style={{ textTransform: "uppercase" }}>{dataPost.title}</h4>
        <div>{dataPost.body}</div>
      </div>
      <div className="posts-read-more">
        {postsReadMore.map((item, index) => {
          return (
            <div style={{ marginRight: 30 }}>
              <h4 style={{ textTransform: "uppercase" }}>{item.title}</h4>
              <p style={{ textAlign: "justify" }}>{item.body}</p>
              <Link to={{ pathname: `/${item.id}`, state: allPosts }}>
                read more
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
