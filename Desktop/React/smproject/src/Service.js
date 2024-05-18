import React, { Component } from 'react';
import './App.css'; 
import pagesData from './pagesData';
import servicePic from './images/serviceFImg.jpeg';
import album1 from './images/album1.png';
import album2 from './images/album2.png';
import album3 from './images/album3.png';
import album4 from './images/album4.png';
import album5 from './images/album5.png';
import mid1 from './images/mid1.png';
import mid2 from './images/mid2.png';
import mid3 from './images/mid3.png';
import mid4 from './images/mid4.png';
import mid5 from './images/mid5.png';


class Service extends Component {
  render() {
    return (
      <div >
        <div className="service-page-container">
          <div className="service-container">
            <div className="service-left-side">
              <h1 className="service-heading">{pagesData.pages[2].title}</h1>
              <p className="service-sub-heading">{pagesData.pages[2].textTitle}</p>
              <div className="service-input-field">
              <input type={pagesData.pages[2].field[0].name} className="service-text-input" placeholder= {pagesData.pages[2].field[0].placeholder} />
               <button type="button" className="service-button">{pagesData.pages[2].buttons[0].name}</button>     
              </div>
              <p className="service-start-journey">{pagesData.pages[2].iconText } <i class="fa-solid fa-arrow-up"></i></p>
              <p className='service-textB'>{pagesData.pages[2].textBa}</p>
            </div>
            <div className="service-right-side">
              <img src={servicePic}  className="service-nice-photo" /></div></div>
              <div className="service-popular-album">
                <h2 className="service-section-title">{pagesData.pages[2].titleAlbum}</h2>
                    <img src={album1}></img>
                    <img src={album2}></img>
                    <img src={album3}></img>
                    <img src={album4}></img>
                    <img src={album5}></img></div>
              <div className="service-popular-meditation">
                <h2 className="service-section-title">{pagesData.pages[2].titleMid}</h2>
                    <img src={mid1}></img>
                    <img src={mid2}></img>
                    <img src={mid3}></img>
                    <img src={mid4}></img>
                    <img src={mid5}></img></div> 
              <br /><br /><br /><br /> 
              <div className="service-how-to-use">
                <h2 className="service-section-title">{pagesData.pages[2].titleHTU}</h2>
                <ul className="service-instructions">
                  <li>{<i class="fa-solid fa-upload"></i>} {"  "} {pagesData.pages[2].pList1}</li> <br /> 
                  <li>{<i class="fa-solid fa-database"></i>} {"  "} {pagesData.pages[2].pList2}</li> <br /> 
                  <li>{<i class="fa-solid fa-music"></i>} {"  "}{pagesData.pages[2].pList3}</li> <br /> 
                  <li>{<i class="fa-solid fa-user"></i>} {"  "} {pagesData.pages[2].pList4}</li> <br /> 
                </ul>
              </div>
              <div className="service-additional-text">
                <p>{pagesData.pages[2].studiesTitle}</p>
              </div>
              <div className="service-article-links">
                <h2 className="service-section-title">{pagesData.pages[2].textArtR}</h2>
                <ul className="service-links">
                  <li><a href={pagesData.pages[2].links[0].url}>{pagesData.pages[2].links[0].name}</a></li><br /> 
                  <li><a href={pagesData.pages[2].links[1].url}>{pagesData.pages[2].links[1].name}</a></li><br /> 
                  <li><a href={pagesData.pages[2].links[2].url}>{pagesData.pages[2].links[2].name}</a></li>
                </ul>
              </div>
        </div>
      </div>
    );
  }
}

export default Service;
