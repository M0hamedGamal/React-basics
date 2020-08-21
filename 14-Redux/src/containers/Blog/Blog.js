import React, { Component } from "react";

import Posts from "../../containers/Blog/Posts/Posts";
import NewPost from "./NewPost/NewPost";

/* 
Route   --> add Route to Components.
NavLink --> add to Navbar to Link pages with Route of Components.
Switch  --> switch between Routes when I want to go to one of them. Prevent render all in the same time.
Redirect --> Change URL From '' To ''.
*/
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* NavLink Component takes 
                'to' as path of URL   OR   'to' as Object with addition info,
                'exact --> when the url exact end as 'to' property, render the page',
                'activeClassName to change default class name and use it into css file --> 'active' is default class name',
                'activeStyle takes object of css if you wanna change style inline'
                We use 'NavLink' instead 'a Tag' to prevent default send new request & auto-refresh page*/}
                <NavLink to="/posts" exact activeClassName="MainPage">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* Route Component takes 
        'path  --> path of url',
        'exact --> when the url exact end as 'path' property to render component',
        'component={Ref of Component}' to render into this path' */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
