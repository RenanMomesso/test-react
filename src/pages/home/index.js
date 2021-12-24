import react, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    setPosts(data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts &&
          posts.map((item) => (
            <li>
              <a href={`/${item.id}`}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
