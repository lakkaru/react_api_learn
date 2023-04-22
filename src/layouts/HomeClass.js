import React, { Component } from "react";

export default class HomeClass extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({users:data}));
  }

  render() {
    return (
      <div>
        {this.state.users.map((val, key) => {
          return <div key={key}>{val.email}</div>;
        })}
      </div>
    );
  }
}
