import React,{Component} from 'react';
import DisplayHealth from './DisplayHealth.js';

const businessurl="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
class health extends Component{
    constructor(){
        super();
        this.state={
            businessnews:'',
            title:'',
            title1:'',
            title2:'',
            title3:'',
              title4:'',
            title5:'',
            title6:'',
            img1:'',
            img2:'',
            img3:'',
            author1:'',
            author2:'',
            author3:''
        }
    }
    render(){
        return(
            <React.Fragment>
            <br/><br/>
            <div className="breaking-news-section">
                       <span id="btext">Breaking News - Entertainment</span>
                     <marquee direction="left" loop="infinite">
                           <a class="breaking-news">   
                           {this.state.title}</a> 
                           <a class="breaking-news">{this.state.title1}</a>
                           <a class="breaking-news">{this.state.title2}</a>
                        <a class="breaking-news">{this.state.title3}</a>               
                    </marquee>
            </div>
         <div className="container" style={{backgroundImage:"linear-gradient(#ffd6d6 , #fff)"}}>
            <h2><b>Hot Today</b></h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">

                <div className="item active">
                    <img src={this.state.img1} alt="Los Angeles" style={{width:"100%"}}/>
                    <div className="carousel-caption">
                    <h3>{this.state.title4}</h3>
                    <p>{this.state.author1}</p>
                    </div>
                </div>

                <div className="item">
                    <img src={this.state.img2} alt="Chicago" style={{width:"100%"}}/>
                    <div className="carousel-caption">
                    <h3>{this.state.title5}</h3>
                    <p>{this.state.author2}</p>
                    </div>
                </div>
                
                <div className="item">
                    <img src={this.state.img3} alt="New York" style={{width:"100%"}}/>
                    <div className="carousel-caption">
                    <h3>{this.state.title6}</h3>
                    <p>{this.state.author3}</p>
                    </div>
                </div>
            
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
    </div>

         <DisplayHealth displaydata={this.state.businessnews}/>
     </React.Fragment>
        )   
    }
     componentDidMount(){
        fetch(businessurl,{
            "method":"GET"
        })
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({businessnews:data.articles});
            this.setState({title:data.articles[0].title});
            this.setState({title1:data.articles[1].title});
            this.setState({title2:data.articles[2].title});
            this.setState({title3:data.articles[3].title});
            this.setState({img1:data.articles[4].urlToImage});
             this.setState({img2:data.articles[5].urlToImage});
           this.setState({img3:data.articles[6].urlToImage});
           this.setState({title4:data.articles[4].title});
            this.setState({title5:data.articles[5].title});
             this.setState({title6:data.articles[6].title});
            this.setState({author1:data.articles[4].author});
            this.setState({author2:data.articles[5].author});
             this.setState({author3:data.articles[6].author});
           
        })
     }   
    
}
export default health;