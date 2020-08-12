import React, { Component } from "react";
// axios lib --> For HTTP Request.
import Axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
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
    this.setState({
      postID: id,
    });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clickedPost={() => this.clickedPostHandler(post.id)}
          />
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.postID} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
