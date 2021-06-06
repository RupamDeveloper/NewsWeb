import React from 'react';
import '../Home/DisplayTwo.css';

const DisplayTech=(props)=>{
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
                        </div>                
                )
            })
        }
         else{
            return(
                <img src="images/loadingSpinner.gif"/>
            )
        }
    }

    return(
        <React.Fragment>
            <div>
                <br/>
                 <div className="small-container">
            <h2 className="title">Techno Stream</h2>
                 <div className="row bg-color">          
                     {renderNews(props)}
                 </div>
                 </div>   
            </div>
        </React.Fragment>
    )
}
export default DisplayTech;