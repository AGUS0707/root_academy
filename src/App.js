import React from 'react';
import Home from "./components/home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "./css/App.css";
import Cource from "./components/Cource";
import RootAcademy from "./components/rootAcademy";
import Seminar from "./components/Seminar";
import Jurnal from "./components/Jurnal";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/kurslar/:url" exact component={Cource}/>
                    <Route path="/biz-haqimizda" exact component={RootAcademy}/>
                    <Route path="/veb-seminarlar" exact component={Seminar}/>
                    <Route path="/jurnal" exact component={Jurnal}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
