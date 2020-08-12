import React, { Component } from "react";
// axios lib --> For HTTP Request.
import Axios from "axios";
import "./Posts.css";
import Post from "../../../components/Post/Post";
import { Route } from "react-router-dom";

// Scroll to Content.
import { Link } from "react-scroll";

import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
    error: false,
  };

  async componentDidMount() {
    try {
      let posts = await Axios.get(
        // Check index.js to see base url.
        "/posts/"
      );
      console.log(posts.data);

      let First4Posts = posts.data.slice(0, 4);

      let addAuthorPosts = First4Posts.map((post) => {
        return {
          ...post,
          author: "Gemy",
          postID: null,
        };
      });
      this.setState({
        posts: addAuthorPosts,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  }

  clickedPostHandler = (id) => {
    console.log(this.props);
    // Get addition props from Route into Blog.js.
    // Now you can see props/history/push --> push page into stack of pages to add new page for the stack without using Redirect Component.
    this.props.history.push({ pathname: this.props.match.url + `/${id}` });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // Link --> Component of Scroll | to --> id of content you wanna scroll to. | smooth --> prevent jump to content | duration --> time by ms.
          <Link to="findPost" smooth={true} duration={1000} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clickedPost={() => this.clickedPostHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>

        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </h1>
        {/* id --> important to link with 'to' prop of Link Scroll. */}
        <section id="findPost">
          {/* Nested Route & this.props.match.url --> Get the path of Route which response to render this Component. */}
          {/* console.log("URL: ", this.props.match.url) */}
          <Route
            path={this.props.match.url + "/:id"}
            exact
            component={FullPost}
          />
        </section>
      </div>
    );
  }
}

export default Posts;
