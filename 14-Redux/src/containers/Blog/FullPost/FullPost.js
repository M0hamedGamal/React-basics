import React, { Component } from "react";
import Axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    fullPost: null,
  };
  componentDidMount() {
    // Get addition props from Route into Blog.js.
    // Now you can see props/match/params/id. | why id ? Cause we add it into 'Route path' into Blog.js.
    console.log(this.props);
    this.loadData();
  }

  // Work when we send another ID by clicking on another one.
  componentDidUpdate() {
    this.loadData();
  }

  loadData = async () => {
    if (this.props.match.params.id) {
      if (
        !this.state.fullPost ||
        (this.state.fullPost &&
          // ( + ) into +this.props.match.params.id -->  Convert String to Number
          +this.props.match.params.id !== this.state.fullPost.id)
      ) {
        let post = await Axios.get(
          // Check index.js to see base url.
          `/posts/${this.props.match.params.id}`
        );

        console.log(post.data);

        this.setState({
          fullPost: post.data,
        });
      }
    }
  };

  deletePostHandler = async () => {
    const deletePost = await Axios.delete(
      // Check index.js to see base url.
      `/posts/${this.props.id}`
    );
    console.log("Deleted: ", deletePost);
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
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
