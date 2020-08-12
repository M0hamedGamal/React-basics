import React, { Component } from "react";
import Axios from "axios";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
  };

  postDataHandler = async () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };

    const post = await Axios.post(
      // Check index.js to see base url.
      "/posts",
      data
    );

    console.log("POST DATA: ", post);

    // Get addition props from Route into Blog.js.
    // Now you can see props/history/replace --> replace page into stack of pages to replace new page with current page without using Redirect Component.
    this.props.history.replace("/posts");
  };

  render() {
    let redirect = null;
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Gemy">Gemy</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
