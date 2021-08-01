import React, {useEffect} from 'react';
import CoursesList from "../json/courses";
import {Link} from "react-router-dom";
import "../styles/courses.scss";
import Fade from 'react-reveal/Fade';
function Courses() {

    return (
        <div className="courses">
            <div className="container">
                <div className="row">
                    {CoursesList.courses.map((item, key)=>{
                        return <div className="col-md-6" key={key}>
                            <Link to={"/kurslar/" + item.link} className="courseCard">
                                <div className="courseFullImg">
                                  <div className="courseImg">
                                      <img src={item.img} alt={key}/>
                                  </div>
                                </div>
                                <Fade bottom duration={1000}>
                                    <h3>{item.name}</h3>
                                </Fade>
                                <Fade bottom duration={1000}>
                                    <p>{item.description}</p>
                                </Fade>
                                <div className="courseLink">
                                    <Link to={"/kurslar/" + item.link} >Kursga otish
                                        <div className="chevronRight"></div>
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Courses;