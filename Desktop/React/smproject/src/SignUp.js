import React, { Component } from 'react';
import pagesData from './pagesData';
import formsData from './formsData';
import './App.css'; 
import signPic from './images/signup.png';

class SignUp extends Component {
  render() {
    return (
      <div className="signUp-container">
        {/* Left side */}
        <div className="signUp-left-side">
          <p>{pagesData.pages[3].title}</p>
          <img src={signPic} alt={pagesData.pages[3].title} />
        </div>
        
        {/* Right side */}
        <div className="signUp-right-side">
          <div className='signUp-form-container'>
            <h2 className="signUp-form-title">{pagesData.pages[3].pageName}</h2>
            {formsData[0].fields.map((item, index) => (
              <div className="signUp-input-group" key={index}>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              </div>
            ))}
            <button className="signUp-button" type={formsData[0].buttons[0].type}>
              {formsData[0].buttons[0].label}
            </button><br/> <br/>
            <text>{formsData[0].text}{' '}
              <a href={formsData[0].buttons[1].url}>
                {formsData[0].buttons[1].label}
              </a>
            </text>
            <div className="signUp-or-text">{formsData[0].text1}</div>
            <div className="signUp-social-buttons">
              <button>
                <a href={formsData[0].socialMediaIcons[0].iconTextUrl}>
                  {formsData[0].socialMediaIcons[0].iconText}
                </a>
              </button>
              <button>
                <a href={formsData[0].socialMediaIcons[1].iconTextUrl}>
                  {formsData[0].socialMediaIcons[1].iconText}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
