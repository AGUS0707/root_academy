import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/main.scss";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CoursesList from "../json/courses";
import Fade from 'react-reveal/Fade';
const items = [
    <div className="item" data-value="1"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="2"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="3"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="4"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="5"><img src="images/img.png" alt="no images"/></div>,
];

const Main=()=> {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <AliceCarousel
                            autoPlay
                            animationDuration={2000}
                            disableButtonsControls
                            infinite
                            items={items}
                            mouseTracking
                        />
                    </div>
                    <div className="col-md-8">
                        <Fade bottom duration={1000}>
                            <h1>Talim platformasi</h1>
                        </Fade>
                        <p>O'qish yo'nalishlari:</p>
                        <ul className="tab-list">
                            <li className="tab-list-item">
                                {CoursesList.courses.map((item, key)=>{
                                    return <Link to={"/kurslar/" + item.link} className="tab-list-item"><Fade clear duration={1000}>{item.name}</Fade></Link>
                                })}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <AliceCarousel
                            autoPlay
                            animationDuration={2000}
                            disableButtonsControls
                            infinite
                            items={items}
                            mouseTracking
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;