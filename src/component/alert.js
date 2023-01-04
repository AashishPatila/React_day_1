import React, { Component } from "react";

export default class Alert extends Component {
  constructor() {
    super();
    alert("constructor");
  }

  componentDidMount() {
    alert("mounted.");
  }

  render() {
    return alert("Rendered.");
  }
}
