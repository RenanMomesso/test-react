import { Link } from "react-router-dom";

const PostItem = ({ item, allPosts }) => {
  console.log(item, allPosts);
  return (
    <div style={{ marginRight: 30 }}>
      <h4 style={{ textTransform: "uppercase" }}>{item.title}</h4>
      <p style={{ textAlign: "justify" }}>{item.body}</p>
      <Link to={{ pathname: `/${item.id}`, state: allPosts }}>read more</Link>
    </div>
  );
};

export default PostItem;
