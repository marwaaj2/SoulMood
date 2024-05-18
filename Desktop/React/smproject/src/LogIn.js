import React, { Component } from 'react';
import formsData from './formsData';
import './App.css'; // Import specific CSS file for Log In component
import { Link } from 'react-router-dom';

class LogIn extends Component {
  render() {
    return (
      <div className='logIn'>
        <div className='logIn-form'>
          <form>
            <h2 className="logIn-title">{formsData[2].textL}</h2>
            <div className="logIn-input-container">
              <label>{formsData[2].fields[0].label}</label>
              <input
                type={formsData[2].fields[0].type}
                name={formsData[2].fields[0].name}
                placeholder={formsData[2].fields[0].placeholder}
                className="logIn-input"
              />
            </div>
            <div className="logIn-input-container">
              <label>{formsData[2].fields[1].label}</label>
              <input
                type={formsData[2].fields[1].type}
                name={formsData[2].fields[1].name}
                placeholder={formsData[2].fields[1].placeholder}
                className="logIn-input"
              />
            </div>
            <div className="logIn-forgetpass"><text><a href='/'>{formsData[2].text}</a></text></div>
            <button className="logIn-login-button">{formsData[2].button}</button><br/><br/>
            <text className="logIn-text1">{formsData[2].text1}</text>
            <div className="logIn-googleB-centered">
                <button className="logIn-google-button"><a href={formsData[2].buttonUrl1}>{formsData[2].button1}</a>
                     
                </button>
            </div>
            <div className="logIn-bottom-createA">
              <text>{formsData[2].text2} <a href={formsData[2].text3Url}>{formsData[2].text3}</a></text>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
