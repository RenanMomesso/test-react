import react, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './home.css'

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
          posts.map((item, key) => (
            <li className="li-post" key={item.id + key}>
              <Link to={`/${item.id}`} >
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
