import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props);
    authData = this.props;
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p>
              <strong>Congratulations {this.props.authData.name}!</strong> If
              you're seeing this page, you've logged in with UPort successfully.
            </p>
            <p>
              <strong>You Can Go for Bidding in The Auction</strong>
            </p>
            <p>
              <strong>Your Phone Number is {this.props.authData.phone}</strong>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
