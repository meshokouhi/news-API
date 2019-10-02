import React, { Component } from 'react';
import "./App.css";
class About extends Component {
  render() {
    return  (
    

      <div className="about">
        <div className ='about title'>
          <h1>About</h1>
          <p>This is a news app.</p>
        </div>
        <div className='about description'>
          <p>This app allows users to enter and submit a news topic and desired language in the search box to change the news articles listed. <br/>
          The latest news topic and the selected language submitted are stored in a cookie and this topic and language are always used when the user revisits the application.
          </p>
        </div>
      </div>
      
      ); 

  }
}
export default About;
