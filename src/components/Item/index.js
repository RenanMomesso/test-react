import { Link } from "react-router-dom";
import "./item.css";

const PostItem = ({ item, allPosts = [], mainPost = true }) => {
  if (!item || !item.title || !item.body) return null;
  return (
    <div className="div-post">
      <h4>{item.title}</h4>
      <p>{item.body}</p>
      {mainPost && (
        <Link to={{ pathname: `/${item.id}`, state: allPosts }}>read more</Link>
      )}
    </div>
  );
};

export default PostItem;
