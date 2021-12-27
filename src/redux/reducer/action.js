import axios from "axios";
import { POSTS_DATA } from "./types";

export const getAllPosts = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("DATA",data)
  dispatch({
    type: POSTS_DATA,
    payload: { data },
  });
};
