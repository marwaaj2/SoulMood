import React, { Component } from 'react';
import './App.css';
import menuesData from './menuesData';
import logo from './images/logo.png'

class HeaderMenu extends Component {
  render() {
    // Filter menu items where menuId is 11
    const filteredMenuItems = menuesData.filter(item => item.menuId === '11');
    const logoText = menuesData.find(menu => menu.menuId === "-1")
    const logoUrl = menuesData.find(menu => menu.menuId === "-1")?.url;
    

    return (
      <div className="header-menu">
        <div className="logo">
          <a href={logoUrl}>
            <img src={logo} alt="Logo" style={{ width: 220, height: 50, maxWidth: '100%' }} />
          </a>
        </div>
        <nav>
          <ul>
            {filteredMenuItems.map(item => (
              <li key={item.menuId}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderMenu;
