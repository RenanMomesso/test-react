import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from './pages/Post'
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:post" component={Post} />

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
