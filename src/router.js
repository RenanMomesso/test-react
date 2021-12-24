import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Post from './pages/Post'
import Home from './pages/Home'

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
