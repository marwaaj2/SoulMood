import React, { Component } from 'react';
import './App.css';
import menuesData from './menuesData';

class FooterMenu extends Component {
  render() {
    const filteredMenuItems = menuesData.filter(item => item.menuId === '12');
    return (
      <div className="footer-menu">
        
        <nav>
        
          <ul className="footer-menu-items">
            {filteredMenuItems.map(item => (
              <li key={item.menuId}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
         
        </nav>
        <ul className="social-media-icons">
            <li><a href="https://facebook.com" ><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://instagram.com" ><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://twitter.com" ><i className="fab fa-twitter"></i></a></li>
          </ul>
      </div>
    );
  }
}

export default FooterMenu;
