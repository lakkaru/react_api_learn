import React, { Component } from "react";

export default class HomeClass extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data, isLoading: false }))
      .catch(() => {
        this.setState({ users: [], isLoading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading === true ? (
          <div>
            <h2>Loading ....</h2>
          </div>
        ) : (
            this.state.users.length>0?(
          this.state.users.map((val, key) => {
            return <div key={key}>{val.email}</div>;
          })):(<div><p>No users found.</p></div>)
        )}
      </div>
    );
  }
}
