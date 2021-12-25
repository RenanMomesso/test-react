import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PostItem from "../../components/Item";
import "./home.css";

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
    <div className="main-home">
      <button
        className="button-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Top
      </button>
      <ul>
        {posts &&
          posts.map((item, key) => (
            <li className="li-post" key={item.id + key}>
              <Link to={{ pathname: `/${item.id}`, state: posts }} params>
                <PostItem item={item} allPosts={[]} mainPost={false} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
