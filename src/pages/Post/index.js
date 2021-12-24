import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const history = useHistory();
  const postId = history.location.pathname.split("/")[1];

  const [dataPost, setDataPost] = useState('')

  const getPostByUrl = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setDataPost(data)
  };

  useEffect(() => {
    getPostByUrl();
  }, []);

  return <div>{dataPost}</div>;
};

export default Post;
