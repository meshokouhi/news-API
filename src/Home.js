import React from 'react';
import CookieService from './CookieService';
import "./App.css";
import Articles from './Articles';
import Footer from './Footer';

const API_KEY    = 'eedafb44f3d841dc927e42bb92e124ec';
const BASE_URL   = 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey='
                 + API_KEY + "&q=";
const MAIN_QUERY = "Top Headlines";
const DEFAULT_LANGUAGE = "en";
const myCookieService = new CookieService();

class Home extends React.Component { 
    constructor() {
        super();
        this.state  = {
          apiKey : API_KEY,
          articles : [],
          defaultQuery: 'politics',
          defaultLanguage:'en',
          language :'',
          query:''
        };

        // Register functions of the class.
        this.getNews   = this.getNews.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }
    
    // Called when constructor is finished building component.
    componentDidMount() {
        // Set main query from cookie if it does not exist.
        let mainQuery= myCookieService.getCookie(MAIN_QUERY);
        let language = myCookieService.getCookie(DEFAULT_LANGUAGE);
        if(mainQuery === null) {
            myCookieService.setCookie(MAIN_QUERY, this.state.defaultQuery);
            mainQuery = this.state.defaultQuery;
        }
        if(language === null) {
            myCookieService.setCookie(DEFAULT_LANGUAGE, this.state.defaultLanguage);
           language = this.state.defaultLanguage;
        }
        this.getNews(mainQuery, language);
    }

    handleSearchChange(e){
        this.setState({query: e.target.value})
    }

    handleLanguageChange(e){
        this.setState({language: e.target.value})
    }

    setSearch(e){
       
        if(this.state.query !== ''){
            this.getNews(this.state.query , this.state.language);
           myCookieService.setCookie(MAIN_QUERY, this.state.query);
           myCookieService.setCookie(DEFAULT_LANGUAGE, this.state.language);
        }
    }

    getNews(query,language) {    
        const URL   = BASE_URL + query+ '&language=' + language;

        // Request and wait for data from remote server.
        fetch(URL).then(response => response.json())
            // Data retrieved so parse it.
            .then((data) => {
                //console.log(JSON.stringify(data));
                this.setState({articles:data.articles});
            })
            // Data is not retieved.
            .catch((error) => {
                alert(error);
            });         
    }

    render() {
        return (          
            <div className = 'body-wrap'>
                
                <div className="top-bar">
                    <h1 className ='heading'>Latest News </h1>
                    <div className ='search-select'>
                    {/* Search Box */}
                        <div id="topic">
                            <input type="text" value={this.state.query} onChange={this.handleSearchChange} />
                        </div>

                    {/* Language Box */}
                        <div id="language">
                            <select type='text' value={this.state.language} onChange={this.handleLanguageChange}>
                                    <option value='en'> English </option>
                                    <option value='fr'> French </option>
                                    <option value='es'> Spanish </option>
                            </select>
                        </div>
                        <button onClick={this.setSearch}> Search</button>
                    </div>
                </div>
                <h2 className='stories'>Top Headlines </h2>
                <Articles articles={this.state.articles}></Articles>
                <Footer/>
            </div>     
        )
    }
}
export default Home;
