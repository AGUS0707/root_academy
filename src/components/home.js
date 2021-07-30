import React from 'react';
import Navbar from "./navbar";
import Main from "../components/main";
import EducationPrograms from '../components/educationPrograms';
import Courses from "../components/courses";
import Footer from "./Footer";
function Home() {

    return (
        <div className="home">
            <Navbar/>
            <Main/>
            <EducationPrograms/>
            <Courses/>
            <Footer/>
        </div>
    );
}

export default Home;