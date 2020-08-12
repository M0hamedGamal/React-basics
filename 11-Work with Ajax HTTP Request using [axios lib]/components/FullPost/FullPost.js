import React, { Component } from "react";
import Axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    fullPost: null,
  };
  async componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.fullPost ||
        (this.state.fullPost && this.props.id !== this.state.fullPost.id)
      ) {
        let post = await Axios.get(
          // Check index.js to see base url.
          `/posts/${this.props.id}`
        );

        console.log(post.data);

        this.setState({
          fullPost: post.data,
        });
      }
    }
  }

  deletePostHandler = async () => {
    const deletePost = await Axios.delete(
      // Check index.js to see base url.
      `/posts/${this.props.id}`
    );
    console.log("Deleted: ", deletePost);
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.fullPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.fullPost.title}</h1>
          <p>{this.state.fullPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
