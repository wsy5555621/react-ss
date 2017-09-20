import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

class UserBar extends Component {

  static propTypes = {
    menuItems: PropTypes.array.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {

  };



  render () {
    const { menuItems, className } = this.props;
    const classes = classNames('userBar', className);
    return (
      <div className={classes}>
      {
        menuItems.map((item, i) => {
          const width = 100 / menuItems.length;
          return (
            <li
              key={i}
              className="li"
              style={{ width: `${width}%` }}
            >
              { 
                item.icon &&
                <div >        
                  <img 
                    src={item.icon}
                  />        
                </div>
              }              
              <Link
                to={item.link}
              >

                {
                  item.userProfile && 
                  <img
                    src={item.userProfile}
                    className="userProfile"
                  />                  
                }
                {item.label}
              </Link>
            </li>
          );
        })
      }
      </div>
    )
  };
}


export default UserBar;