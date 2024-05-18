import React, { Component } from 'react';
import pagesData from './pagesData';
import formsData from './formsData';
import './App.css'

class ContactUs extends Component {
  render() {
    return (
    <div className='contactUs'>
      <div className='contactUsPage'>
        <form>
          <h2>{pagesData.pages[4].pageName}</h2>
          <div>
            <label>{formsData[1].fields[0].label}</label>
            <input
              type={formsData[1].fields[0].type}
              name={formsData[1].fields[0].name}
              placeholder={formsData[0].fields[0].placeholder}
            />
          </div>
          <div>
            <label>{formsData[1].fields[1].label}</label>
            <input
              type={formsData[1].fields[1].type}
              name={formsData[1].fields[1].name}
              placeholder={formsData[0].fields[1].placeholder}
            />
          </div>
          <div>
            <label>{formsData[1].fields[2].label}</label>
            <textarea
              type={formsData[1].fields[2].type}
              name={formsData[1].fields[2].name}
              placeholder={formsData[1].fields[2].placeholder}
            ></textarea>
          </div>
          <button type={formsData[1].buttons[0].type}>{formsData[1].buttons[0].label}</button>
        </form>
      </div>
      </div>
    );
  }
}

export default ContactUs;

