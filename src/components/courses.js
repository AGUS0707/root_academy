import React from 'react';
import CoursesList from "../json/courses";
import {Link} from "react-router-dom";
import "../styles/courses.scss";
function Courses() {
    return (
        <div className="courses">
            <div className="container">
                <div className="row">
                    {CoursesList.courses.map((item, key)=>{
                        return <div className="col-md-6" key={key}>
                            <Link to="/" className="courseCard">
                                <div className="courseFullImg">
                                  <div className="courseImg">
                                      <img src={item.img} alt={key}/>
                                  </div>
                                </div>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className="courseLink">
                                    <Link to="/" >Kursga otish
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