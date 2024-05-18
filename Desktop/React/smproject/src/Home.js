import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import pagesData from './pagesData';
import './App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-text">{pagesData.pages[0].title}</div>
        <div className="text-below">{pagesData.pages[0].text}</div>
        <Link to="/Service">
        <button type="button" className="button">
            {pagesData.pages[0].button}
          </button>
        </Link>
        
      </div>
    );
  }
}

export default HomePage;


