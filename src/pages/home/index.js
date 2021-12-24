import react, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
  };

  useEffect(() => {
    getAllPosts()
  }, []);

  return <div></div>;
};

export default Home;
