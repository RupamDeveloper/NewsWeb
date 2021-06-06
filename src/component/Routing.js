import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/home';
import business from './Business/business';
import health from './Health/health';
import sport from './Sport/Sport';
import entertainment from './Entertainment/Entertainment';
import tech from './Technology/technology';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/business" component={business}></Route>
                <Route path="/health" component={health}></Route>
                <Route path="/entertainment" component={entertainment}></Route>
                <Route path="/sport" component={sport}></Route>
                <Route path="/technology" component={tech}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default Routing;