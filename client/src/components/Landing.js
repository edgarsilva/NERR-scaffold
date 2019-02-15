import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Sign in with Google</a></li>
        );
      default:
        return (
          <li><a href="/api/logout">Sign out</a></li>
        );
    }
  }

  render() {
    return (
      <div style= { { textAlign: 'center'} }>
        <h1>Emaily</h1>
        Collect feedback
      </div>
    );
  }
}

function mapStateToProps({ landing }) {
  return { landing };
}

export default connect(mapStateToProps)(Landing);
