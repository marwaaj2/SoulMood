import React, { Component } from 'react';
import pagesData from './pagesData';
import './App.css'; 

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-content">
          <div className="about-title">{pagesData.pages[1].title}</div>
          <p>{pagesData.pages[1].text}</p>
        </div>
      </div>
    );
  }
}

export default About;
