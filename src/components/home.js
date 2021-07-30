import React from 'react';
import Navbar from "./navbar";
import Main from "../components/main";
import EducationPrograms from '../components/educationPrograms';
import Courses from "../components/courses";
function Home() {

    return (
        <div className="home">
            <Navbar/>
            <Main/>
            <EducationPrograms/>
            <Courses/>
        </div>
    );
}

export default Home;