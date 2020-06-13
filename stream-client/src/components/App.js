import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

const PageOne = () => {
    return (
        <div>
            Page One
            <br />
            <Link to='/page-two'>Page Two</Link>
        </div>
    )

}

const PageTwo = () => {
    return (
        <div>
            Page Two
            <br />
            <Link to=''>Page One</Link>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne}/>
                <Route path="/page-two" component={PageTwo}/>
            </div>
        </BrowserRouter>
    )
}

export default App;