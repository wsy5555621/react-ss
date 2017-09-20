import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import UserBar from '../../components/userBar';
import { claerUserBar } from '../../actions';

export class BasePageComponent extends Component {

  static propTypes = {
    menuItems: PropTypes.array.isRequired
  };

  renderPage = (match, location) => {
    return (
      <div 
        style={{ "color": "red" }}
      >
        {`在页面${location.pathname}中`}
      </div>
    )
  };

  render() {
    const { menuItems, pageContent, match, location, clearTest, path } = this.props;
    console.log(path)
    return (
      <div>
        {
          this.renderPage(match, location)
        }
        <button
          onClick={clearTest}
        >
        </button>
        <UserBar 
          menuItems={menuItems}
        />
      </div>
    )

  };
}


const mapStateToProps = (state) => {
  return {
    menuItems: state.userBar.menuItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearTest: () => dispatch(claerUserBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePageComponent);