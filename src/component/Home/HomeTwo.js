import React, { Component } from 'react';
import DisplayTwo from './DisplayTwo';

const newsurl="https://newsapi.org/v2/top-headlines?country=in&apiKey=bb64cde2d8934e709d84765b033792b2";
class HomeTwo extends Component {

     constructor(){
         super()

         this.state={
             newshere:''
         }
     }
     render(){
         return(
             <DisplayTwo displaydata={this.state.newshere}/>
         )
     }
     componentDidMount(){
         fetch(newsurl,{
             method:"GET"
         })
         .then((res)=>res.json())
         .then((data)=>{
             this.setState({newshere:data.articles})
         })
     }
}
export default HomeTwo;