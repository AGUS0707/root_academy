import React from 'react';
import Home from "./components/home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "./css/App.css";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
