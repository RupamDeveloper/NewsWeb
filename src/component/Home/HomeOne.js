import React,{Component, useState} from 'react';
import {Link} from 'react-router-dom';
import './HomeOne.css';
import CountUp from 'react-countup';

const coronaurl="https://coronavirus-map.p.rapidapi.com/v1/summary/region?region=india";
const weatherurl="http://api.weatherstack.com/current?access_key=3da8adf4b3a2e5e4ef7557c568c4b41d&query=Pune";
const quoetsurl="https://type.fit/api/quotes";
const getcity2="https://us1.locationiq.com/v1/reverse.php?key=pk.791d7afaf3e15602cb7391e7bea320b6&lat=";
class HomeOne extends Component{

        constructor(){
            super();               
        
            this.state={
                coronacase:'',
                deaths:'',
              temp:'',
                weathercode:'',
                sunmoon:'',
                quoets:'',
                auther:'',
                wishes:'',
                city:'',
            };
        }
 
        render(){
            return(
                <React.Fragment>
                    <body>
                        <div className="header">
                            <div className="container">
                                    <div className="navbar">
                                        <div className="logo">
                                            <a><img src="images/icon.png" 
                                                width="125px"/></a>
                                        </div>
                                        <nav>
                                            <ul id="MenuItems" >
                                               <Link to='./business'><li className="menu1">Business</li></Link> 
                                               <Link to='./entertainment'><li className="menu2">Entertainment</li></Link> 
                                               <Link to='./sport'><li className="menu3">Sports</li></Link> 
                                                <Link to='./health'><li className="menu4">Health</li></Link>
                                                <Link to='./technology'><li className="menu6">Technology</li></Link>
                                            </ul>
                                        </nav>
                                        
                                    <a href="shop cart.html"><img src="images/newspaper.png" className="logo"/></a>
                                    
                                    <img src="images/menuu.png" className="menu-icon"/>
                                    </div>
                    
                                    <div className="row">
                                    <div className="col-2">
                                            <h1>Good {this.state.wishes}<br/>India</h1>
                                            <p><b>{this.state.quoets}</b> <br/>~ By {this.state.auther} </p>
                                            <Link to='./technology'><a class="btn">Go For Read →</a></Link>
                                        </div>
                                        
                                    <div className="col-2">
                                        <img className="img-temp" src={this.state.sunmoon}/><br/>
                                        <span><CountUp end={this.state.temp}/>&#8451;</span><br/>
                                        <h2>Temperature</h2>
                                        <br/>
                                        <span><CountUp end={this.state.weathercode}/>&#8525;</span>
                                        <br/>
                                        <h2>{this.state.weatherdesc}</h2>
                                    </div>
                                </div>
                    
                            </div> 
                         </div>   
        
                        <div className="corona-container"> 
                            <div className="container">
                                <div className="row"> 
                                    <div className="col-2">
                                    <h1><CountUp end={this.state.coronacase}/><br/></h1><h2 style={{opacity:"0.7"}}>Active Cases India</h2><br/>
                                    <h1><CountUp end={this.state.deaths}/><br/></h1><h2 style={{opacity:"0.7"}}>Deaths</h2>
                        
                                   </div>
                                        <div className="col-2">
                                            <img src="images/corona.png" class="corona-img"/>
                                        </div>
                                </div>                               
                            </div>  
                            </div> 
                            <center><img src="images/staysafe.png" style={{width:"15%",height:"15%"}}/></center>

                            <div className="row">
                             <div className="col-lg-3"></div>
                              <div className="col-lg-6">
                                <center> <p class="covid-msg"><img src="images/mask.svg" class="mask-img"/>
                                    <a href="https://www.google.com/search?q=coronavirus+prevention" target="_blank">
                                    <b style={{color:"blue"}}>_Wear a mask. Help slow the spread of COVID-19</b></a></p> </center>
                             </div>
                             <div className="col-lg-3"></div>
                            </div> 

                        <div class="categories">
                        
                            <div class="small-container">
                                <div class="row">
                                    <div class="col-3">
                                    <div class="box">
                                            <img src="images/entertainment.jpg"/>
                                                <div class="box-content">
                                                    <h3 class="title">Entertainment</h3>
                                                    <span class="post">kiya jaye</span>
                                                </div>
                                                <ul class="icon">
                                                <Link to='./entertainment'><button class="btn">Go For Read →</button></Link>
                                                </ul>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                    <div class="box">
                                            <img src="images/business.jpg"/>
                                                <div class="box-content">
                                                    <h3 class="title">Business</h3>
                                                    <span class="post">Do It Now</span>
                                                </div>
                                                <ul class="icon">
                                                <Link to='./business'><button class="btn">Go For Read →</button></Link>
                                                </ul>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                    <div class="box">
                                            <img src="images/sport.jpg"/>
                                                <div class="box-content">
                                                    <h3 class="title">Sports</h3>
                                                    <span class="post">Here</span>
                                                </div>
                                                <ul class="icon">
                                                <Link to='./sport'><button class="btn">Go For Read →</button></Link>
                                                </ul>
                                        </div>
                                    </div>
                                
                                    <div class="col-3">
                                    <div class="box">
                                            <img src="images/yoga.jpg"/>
                                                <div class="box-content">
                                                    <h3 class="title">Health</h3>
                                                    <span class="post">is wealth</span>
                                                </div>
                                                <ul class="icon">
                                                <Link to='./health'><button class="btn">Go For Read →</button></Link>
                                                </ul>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                    <div class="box">
                                            <img src="images/general.jpg"/>
                                                <div class="box-content">
                                                    <h3 class="title">Business</h3>
                                                    <span class="post">Section</span>
                                                </div>
                                                <ul class="icon">
                                                <Link to='./general'><button class="btn">Go For Read →</button></Link>
                                                </ul>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                    <div class="box">
                                            <img src="images/technology.jpg"/>
                                                <div class="box-content">
                                                    <h3 class="title">Technology</h3>
                                                    <span class="post">Streaming</span>
                                                </div>
                                                <ul class="icon">
                                                <Link to='./technology'><button class="btn">Go For Read →</button></Link>
                                                </ul>
                                        </div>
                                    </div>
                                </div>                        
                        
                            </div>
                    </div>
                                
                </body>
            </React.Fragment>
            )
        }
      /* Getting Location */ 

           /* Fetching API corona */
           componentDidMount()
            {  
            fetch(coronaurl, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-key": "e88dbd5b24mshff3d0e5d2f626ffp194071jsna62be378906e",
                            "x-rapidapi-host": "coronavirus-map.p.rapidapi.com"
                        }
                    })
                .then((res)=>res.json())
                .then((data) =>{
                    this.setState({coronacase:data.data.summary.active_cases});
                    this.setState({deaths:data.data.summary.deaths})
                    
                });

      /* Good wishes */
        
      var time=new Date();
        var hours=time.getHours(); 
        if (hours<=12)
        {
            this.setState({wishes:"morning"});
            this.setState({sunmoon:"images/sun.png"});
           
        }
        else if(hours>12 && hours<19)
        {
            this.setState({wishes:"Afternoon"});
            this.setState({sunmoon:"images/sun.png"});
        }    
        else{
            this.setState({wishes:"Evening"});
            this.setState({sunmoon:"images/moon.png"});
        }      
     

       /*Fetching API weather */
                fetch(weatherurl,{
                    "method":"GET"
                })
                .then((res)=>res.json())
                .then((data)=>{
                this.setState({temp:data.current.temperature,weatherdesc:data.current.weather_descriptions,weathercode:data.current.weather_code})
                console.log("weatherurl get");
                })

        /* Fetching Daily Quoets*/
                
                fetch(quoetsurl,{
                    "method":"GET"
                })        
                .then((res)=>res.json())
                .then((data)=>{
                    var date=new Date();
                    var today=date.getDay();
                    this.setState({quoets:data[today].text});
                    this.setState({auther:data[today].author})
                    
                })
        }    
    }

export default HomeOne;