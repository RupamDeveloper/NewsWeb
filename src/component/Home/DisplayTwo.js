import React,{useState} from 'react';
import './DisplayTwo.css';
console.log("displaytwo");
const DisplayTwo=(props)=>{
   const [count, setCount] = useState(0)
    const renderNews = ({displaydata})=>{
        if(displaydata){
            return displaydata.map((item)=>{
             
                return(          
                        <div class="col-4">
                            <img src={item.urlToImage}/>
                            <h4>{item.title} </h4>
                            <br/>
                            <p>{item.author}</p>
                            <br/>
                            <p>{item.source.name}</p>
                            <br/>
                            <span class="fa fa-heart heart" onClick={() => setCount(count + 1)}>{count}</span>
                            <span class="fa fa-bookmark save"></span>
                            <span class="fa fa-share share"></span>
                        </div>
                    
                )
            })
        }
        else {
            return(
             <img src="images/loadingSpinner.gif"/>
            )
        }
    }

    return(
        <React.Fragment>
            <div>
                 <div class="small-container">
            <h2 class="title">Update Me Here</h2>
                 <div class="row">          
                     {renderNews(props)}
                 </div>
                 </div>   
            </div>
   
        </React.Fragment>
    )
}
export default DisplayTwo;