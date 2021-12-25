import { useState, useEffect, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";
import "./post.css";
import axios from "axios";
import PostItem from "../../components/Item";

const Post = () => {
  const history = useHistory();

  const postId = history.location.pathname.split("/")[1];
  const allPosts = history.location.state;


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
    <div className="main-post">
      <button onClick={() => history.push("/")}>HOME</button>
      <div>
        <PostItem item={dataPost} mainPost={false} />
      </div>
      <div className="posts-read-more">
        {postsReadMore.map((item, index) => {
          return <PostItem item={item} allPosts={allPosts} />;
        })}
      </div>
    </div>
  );
};

export default Post;
