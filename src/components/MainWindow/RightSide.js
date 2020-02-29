import React, { Component } from "react";
import "./RightSide.less";

class RightSide extends Component {
  render() {
    return (
      <article>
        {this.props.children}
      </article>
    );
  }
}

export default RightSide;