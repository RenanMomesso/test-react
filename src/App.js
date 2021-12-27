import "./App.css";
import Router from "./router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "./redux/reducer/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return <Router />;
}

export default App;
