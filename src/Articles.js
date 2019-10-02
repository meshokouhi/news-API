import React from 'react';
import ImagesFormat from './ImagesFormat';
import Moment       from 'react-moment';

const Articles = (props) => {

  return (
          <div className = "articles-wrap">
                { props.articles.map((article,index) => (

                  <div className = 'one-article' key={index}>

                  <ImagesFormat urlToImage={article.urlToImage}/>
                        
                        <article>
                            <h1>{article.title}</h1>
                            <p><span className="author"> By    {article.author}</span><span className="source">, {article.source.name}</span>
                            <br/>   
                            <span className="updated">Updated </span>
                            <Moment className="date" format="DD/MM/YYYY  HH:mma" >
                             {article.publishedAt}</Moment> 
                            </p>
                            
                            <p className="article-description">{article.description}</p> 
                            <a href={`${article.url}`} target="blank">Read More...</a>
                        
                        </article>

                    </div>
                ))}  
            </div> 

  )
  }
  export default Articles;
  