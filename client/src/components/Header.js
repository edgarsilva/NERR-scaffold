// Base Components
import React, { Component } from 'react';
import { connect } from 'react-redux';

// React Router Components
import { Link, withRouter } from 'react-router-dom';

// Semantic-UI Components
import { Menu, Segment } from 'semantic-ui-react'

// Actions
import * as actions from '../actions';

class Header extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name, to }) => {
    this.setState({ activeItem: name });
    this.props.history.push(to);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted style={ { borderRadious: 0 } }>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            to='/'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='semantic'
            to='/semantic'
            active={activeItem === 'semantic'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(Header));
