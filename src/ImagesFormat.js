import React from 'react';
import "./ImagesFormat.css";
class ImagesFormat extends React.Component{
  render(){
    return(
    <div className ='image-wrap'>
      <img className ='news-image' src ={this.props.urlToImage} alt="news"/>
    </div>
    )
  }
  
  }
  export default ImagesFormat;
