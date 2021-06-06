import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <React.Fragment>
     
         <div class="footer">
                 <div class="container">
                   <div class="row">
                       <div class="footer-col-1">
                          <h1>Short News</h1> 
                          <p>Stay Updated ...</p>
                           <div class="app-logo">
                              <img src="images/icon.png"/>
                              
                          </div>
                       </div>
                       <div class="footer-col-1">
                        
                          <p>Our Purpose Is To stay you updated with latest 
                          news by saving your time. </p>
                       </div>
                       <div class="footer-col-3">
                          <h1>Explore More-></h1> 
                         <ul>
                               <Link to='./business'><li>Business</li></Link> <br/>
                                <Link to='./entertainment'><li>Entertainment</li></Link><br/> 
                              <Link to='./sport'><li>Sports</li></Link> <br/>
                                <Link to='./health'><li>Health</li></Link> <br/>                               
                               <Link to='./technology'><li>Technology</li></Link>
                         </ul>
                       </div>
                       <div class="footer-col-4">
                          <h1>Follow Us</h1> 
                         <ul>
                             <li>Facebook</li>
                             <li>Twitter</li>
                             <li>Instagram</li>
                             <li>YouTube</li>
                         </ul>
                       </div>
        
                    </div>
                    <hr/>
                    <center><p class="Copyright">Copyright 2021 - Short News </p></center>
                </div>
         </div>
        </React.Fragment>
    )
}

export default Footer;