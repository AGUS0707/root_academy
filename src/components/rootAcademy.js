import React from 'react';
import "../styles/rootAcademy.scss";
import Navbar from "./navbar";
import RootAcademyHeader from "./rootAcademyHeader";
import RootAcademyMain from "./rootAcademyMain";
import Footer from "./Footer";
function RootAcademy(props) {
    console.log(props)
    return (
        <div className="rootAcademy">
            <Navbar location={props.location.pathname}/>
            <RootAcademyHeader/>
            <RootAcademyMain/>
            <Footer/>
        </div>
    );
}

export default RootAcademy;